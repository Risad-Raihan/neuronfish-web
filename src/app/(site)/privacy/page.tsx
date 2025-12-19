import { Container } from "@/components/ui/Container"

export const metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <Container className="prose prose-gray max-w-3xl dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At NeuronFish, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your information when you use our website and products (DIKKHA, CHHAR).
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and phone number when you register for our services or contact us. For CHHAR, we may also collect location data with your permission to provide local deals.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To personalize your experience.</li>
          <li>To communicate with you about updates and offers.</li>
          <li>To improve our AI models (using anonymized data only).</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at support@neuronfish.dev.
        </p>
      </Container>
    </div>
  )
}

