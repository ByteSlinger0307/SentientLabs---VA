"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "footer" | "icon-only";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const sizes = {
    default: { width: 32, height: 32 },
    footer: { width: 40, height: 40 },
    "icon-only": { width: 28, height: 28 },
  };

  const { width, height } = sizes[variant];

  // Icon only variant - just the logo image as a link
  if (variant === "icon-only") {
    return (
      <Link 
        href="/" 
        className={`flex items-center shrink-0 ${className}`}
        aria-label="SentientLabs Home"
      >
        <Image
          src="/images/sentientlogo.png"
          alt="SentientLabs"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </Link>
    );
  }

  // Footer variant - logo + text, no link wrapper
  if (variant === "footer") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Image
          src="/images/sentientlogo.png"
          alt="SentientLabs Logo"
          width={width}
          height={height}
          className="object-contain shrink-0"
          priority
        />
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          SentientLabs
        </span>
      </div>
    );
  }

  // Default variant - logo + text with link and hover effect
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="SentientLabs Home"
    >
      <Image
        src="/images/sentientlogo.png"
        alt="SentientLabs Logo"
        width={width}
        height={height}
        className="object-contain shrink-0 transition-transform group-hover:scale-105 duration-200"
        priority
      />
      <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        SentientLabs
      </span>
    </Link>
  );
}