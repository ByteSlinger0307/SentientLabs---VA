"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Home", href: "/" },
      { label: "Product", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Solutions", href: "/solutions" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "API", href: "#" },
      { label: "About", href: "/about" },
    ],
    company: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="relative w-full bg-slate-950 border-t border-gray-800 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              SentientLabs
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Voice agents that think. Automations that scale. Deploy intelligent AI to streamline your business.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="py-8 text-center text-sm text-gray-400">
          <p>© 2025 SentientLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}