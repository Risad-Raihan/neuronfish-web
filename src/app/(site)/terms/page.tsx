import { Container } from "@/components/ui/Container"

export const metadata = {
  title: "Terms of Service",
}

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container className="prose prose-gray max-w-3xl dark:prose-invert">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Please read these Terms of Service carefully before using our website and products operated by NeuronFish.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily access the materials (information or software) on NeuronFish&apos;s website for personal, non-commercial transitory viewing only.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on NeuronFish&apos;s website are provided on an &apos;as is&apos; basis. NeuronFish makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </Container>
    </div>
  )
}

