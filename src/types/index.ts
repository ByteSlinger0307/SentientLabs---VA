import { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface FeatureCard {
  icon: LucideIcon
  title: string
  description: string
  gradient?: string
}

export interface PricingTier {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaText: string
  ctaVariant: 'primary' | 'secondary'
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export interface SolutionCard {
  icon: LucideIcon
  title: string
  description: string
  useCases: string[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}