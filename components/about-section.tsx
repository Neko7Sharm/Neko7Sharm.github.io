"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">ข้อมูล</h2>
          </div>

          <motion.div
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              สวัสดีครับ! ผมชื่อ Phuwadech เป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในการสร้างเว็บแอปพลิเคชันที่สวยงามและใช้งานง่าย 
              ผมสนใจเทคโนโลยีใหม่ๆ และชอบเรียนรู้สิ่งใหม่อยู่เสมอ นอกจากนี้ยังชื่นชอบการออกแบบ UI/UX 
              และการสร้างประสบการณ์ผู้ใช้ที่ดี
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
