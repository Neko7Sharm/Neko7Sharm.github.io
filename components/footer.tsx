"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="py-8 px-4 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          สร้างด้วย{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </motion.span>{" "}
          โดย Phuwadech
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          © 2026 Phuwadech Profile. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
