import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}