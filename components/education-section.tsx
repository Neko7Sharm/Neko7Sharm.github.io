"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    year: "2567 - ปัจจุบัน",
    degree: "ปริญญาตรี วิทยาการคอมพิวเตอร์",
    institution: "มหาวิทยาลัย ABC",
  },
  {
    year: "2564 - 2567",
    degree: "มัธยมศึกษาตอนปลาย สายวิทย์-คณิต",
    institution: "โรงเรียน XYZ",
  },
  {
    year: "2561 - 2564",
    degree: "มัธยมศึกษาตอนต้น",
    institution: "โรงเรียน XYZ",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">รายละเอียดการศึกษา</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background"
                    whileHover={{ scale: 1.3 }}
                  />

                  <motion.div
                    className="bg-card rounded-2xl p-5 md:p-6 shadow-sm border border-border"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
