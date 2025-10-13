// ============================================
// FILE: src/components/layout/scroll-to-top.tsx
// ============================================
'use client'

import { memo, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollPosition } from '@/hooks/use-scroll-position'

export const ScrollToTop = memo(function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setIsVisible(scrollPosition > 300)
  }, [scrollPosition])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full glass-effect glass-effect-hover shadow-glow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
})