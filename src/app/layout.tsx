import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | NeuronFish",
    default: "NeuronFish - AI-powered products for everyday learning & savings",
  },
  description: "Building AI-powered products for Bangladesh. Home of DIKKHA and CHHAR.",
  metadataBase: new URL("https://www.neuronfish.dev"),
  keywords: ["AI", "Bangladesh", "Education", "Savings", "DIKKHA", "CHHAR", "Dhaka", "Technology"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.neuronfish.dev",
    siteName: "NeuronFish",
    title: "NeuronFish - AI for Bangladesh",
    description: "Innovating for everyday learning and savings with AI.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NeuronFish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuronFish",
    description: "AI-powered products for everyday learning & savings in Bangladesh.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-background font-sans text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
