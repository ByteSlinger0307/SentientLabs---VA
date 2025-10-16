"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions? We&apos;d love to hear from you. Send us a message and 
              we&apos;ll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@sentientlabs.digital</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91-8788775779</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="@company.com or @gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  {...register("company")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {isSubmitted && (
                <div className="bg-primary/10 border border-primary rounded-md p-4 text-center">
                  <p className="text-primary font-semibold">
                    Message sent successfully! We&apos;ll be in touch soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
