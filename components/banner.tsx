"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Banner() {
  return (
    <motion.header
      className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary py-8 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto flex items-center gap-4">
        {/* Logo Placeholder */}
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/30 flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </motion.div>

        {/* Site Title */}
        <div>
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Phuwadech Profile
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-sm md:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ยินดีต้อนรับสู่โปรไฟล์ของฉัน
          </motion.p>
        </div>
      </div>
    </motion.header>
  )
}
