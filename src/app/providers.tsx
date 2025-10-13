// src/app/providers.tsx
'use client'

import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  // You can add providers here in the future (Theme, Auth, etc.)
  return <>{children}</>
}