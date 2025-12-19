"use client"

import { useActionState, useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card, CardContent } from "@/components/ui/Card"
import { Toast } from "@/components/ui/Toast"
import { submitContactForm } from "./actions"

const initialState = {
  success: false,
  message: "",
  errors: {},
}

function ContactForm() {
  const searchParams = useSearchParams()
  const initialSubject = searchParams.get("subject") || ""
  
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (state.success || (state.message && !state.success)) {
      // Trigger toast only if state changes from a user action
      const timer = setTimeout(() => setShowToast(true), 100)
      return () => clearTimeout(timer)
    }
  }, [state])

  // Reset form after success
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) form.reset()
    }
  }, [state.success])

  return (
    <>
      {showToast && (
        <Toast
          message={state.message}
          type={state.success ? "success" : "error"}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="rounded-2xl border bg-card p-8 shadow-sm">
        <form id="contact-form" action={formAction} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-describedby={state.errors?.name ? "name-error" : undefined}
              />
              {state.errors?.name && (
                <p id="name-error" className="text-xs text-red-500">
                  {state.errors.name[0]}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-describedby={state.errors?.email ? "email-error" : undefined}
              />
              {state.errors?.email && (
                <p id="email-error" className="text-xs text-red-500">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              defaultValue={initialSubject}
              placeholder="How can we help?"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              aria-describedby={state.errors?.subject ? "subject-error" : undefined}
            />
            {state.errors?.subject && (
              <p id="subject-error" className="text-xs text-red-500">
                {state.errors.subject[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell us more about your inquiry..."
              className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              aria-describedby={state.errors?.message ? "message-error" : undefined}
            />
            {state.errors?.message && (
              <p id="message-error" className="text-xs text-red-500">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </>
  )
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions about DIKKHA or CHHAR? We'd love to hear from you."
          className="mb-12"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="flex flex-col gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      For support and general inquiries:
                    </p>
                    <a
                      href="mailto:support@neuronfish.dev"
                      className="text-lg font-medium hover:text-primary hover:underline"
                    >
                      support@neuronfish.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-2xl border bg-muted/30 p-8">
              <h3 className="mb-4 text-xl font-bold">Frequently Asked Questions</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Before sending a message, check if your question is answered in our FAQ sections.
              </p>
              <div className="flex flex-col gap-3">
                <Button variant="outline" asChild className="justify-start">
                  <a href="/products/dikkha#faq">DIKKHA FAQ</a>
                </Button>
                <Button variant="outline" asChild className="justify-start">
                  <a href="/products/chhar#faq">CHHAR FAQ</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Suspense fallback={<div className="rounded-2xl border bg-card p-8 shadow-sm h-[600px] animate-pulse bg-muted" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </div>
  )
}
