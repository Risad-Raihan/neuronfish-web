"use server"

interface ContactState {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic server-side validation
  const errors: ContactState["errors"] = {}
  if (!name || name.length < 2) errors.name = ["Name must be at least 2 characters"]
  if (!email || !email.includes("@")) errors.email = ["Please enter a valid email"]
  if (!subject) errors.subject = ["Subject is required"]
  if (!message || message.length < 10) errors.message = ["Message must be at least 10 characters"]

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Validation failed", errors }
  }

  // Log to console (Simulate email sending)
  console.log("--- CONTACT FORM SUBMISSION ---")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Subject:", subject)
  console.log("Message:", message)
  
  if (process.env.RESEND_API_KEY) {
     // TODO: Implement Resend logic here
     console.log("Resend API Key found, but integration not yet active.")
  } else {
    console.log("No Resend API Key found. Skipping email send.")
  }
  console.log("-------------------------------")

  return { success: true, message: "Message sent successfully!" }
}

