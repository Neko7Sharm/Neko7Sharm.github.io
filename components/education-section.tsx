"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, BookOpen } from "lucide-react"

const education = [
  {
    period: "พ.ศ. 2564 - คาดว่าจะจบ 2569",
    level: "ปริญญาตรี",
    institution: "มหาวิทยาลัยศรีนครินทรวิโรฒ",
    detail: "สาขาวิศวกรรมคอมพิวเตอร์",
    icon: GraduationCap,
    color: "bg-primary/15 text-primary",
    dotColor: "bg-primary",
  },
  {
    period: "พ.ศ. 2561 - 2564",
    level: "มัธยมศึกษาตอนปลาย",
    institution: "โรงเรียนสิงห์สมุทร",
    detail: "โครงการวิทย์-คณิต",
    icon: BookOpen,
    color: "bg-accent/30 text-accent-foreground",
    dotColor: "bg-accent",
  },
  {
    period: "พ.ศ. 2558 - 2561",
    level: "มัธยมศึกษาตอนต้น",
    institution: "โรงเรียนสิงห์สมุทร",
    detail: "โครงการวิทย์-คณิต",
    icon: School,
    color: "bg-secondary text-secondary-foreground",
    dotColor: "bg-muted-foreground",
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
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              รายละเอียดการศึกษา
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted-foreground/30" />

            <div className="space-y-8">
              {education.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative pl-14 md:pl-20"
                  >
                    {/* Timeline dot with icon */}
                    <motion.div
                      className={`absolute left-2.5 md:left-4.5 top-4 w-5 h-5 rounded-full ${item.dotColor} border-4 border-background shadow-sm`}
                      whileHover={{ scale: 1.4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />

                    <motion.div
                      className="bg-card rounded-2xl p-5 md:p-6 shadow-sm border border-border overflow-hidden relative group"
                      whileHover={{ x: 6, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl" />

                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                              {item.level}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.period}
                            </span>
                          </div>

                          <h3 className="text-base md:text-lg font-bold text-foreground mt-1.5">
                            {item.institution}
                          </h3>

                          <p className="text-sm text-muted-foreground mt-1">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
