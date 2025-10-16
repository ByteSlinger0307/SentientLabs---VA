import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "SentientLabs | Voice Agents That Think",
  description: "Deploy intelligent chat and voice AI to streamline your business — no matter the industry.",
  icons: {
    icon: [
      {
        url: "/images/sentientlogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/sentientlogo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/images/sentientlogo.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/images/sentientlogo.png",
  },
  openGraph: {
    title: "SentientLabs | Voice Agents That Think",
    description: "Deploy intelligent chat and voice AI to streamline your business",
    images: ["/images/sentientlogo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SentientLabs | Voice Agents That Think",
    description: "Deploy intelligent chat and voice AI to streamline your business",
    images: ["/images/sentientlogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical logo image */}
        <link
          rel="preload"
          as="image"
          href="/images/sentientlogo.png"
          type="image/png"
        />
        {/* Preload critical hero brain image */}
        <link
          rel="preload"
          as="image"
          href="/images/sentientbrain.png"
          type="image/png"
          fetchPriority="high"
        />
        {/* Preconnect to external domains if needed */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}