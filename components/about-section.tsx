"use client"

import { motion } from "framer-motion"
import { User, Code, Database, Layout, Palette, PenTool, Languages } from "lucide-react"

const personalInfo = [
  { label: "ชื่อ", value: "ภูวเดช นาแหยม" },
  { label: "วันเกิด", value: "2 กรกฎาคม พ.ศ.2545" },
  { label: "สัญชาติ", value: "ไทย" },
  { label: "เชื้อชาติ", value: "ไทย" },
]

const skillCategories = [
  {
    title: "Programming Language",
    icon: Code,
    color: "bg-primary/15 text-primary",
    items: ["C", "Java", "HTML", "JavaScript", "Python"],
  },
  {
    title: "Database",
    icon: Database,
    color: "bg-accent/30 text-accent-foreground",
    items: ["MySQL", "MongoDB (Basic)"],
  },
  {
    title: "Development",
    icon: Layout,
    color: "bg-secondary text-secondary-foreground",
    items: ["React", "Node.js"],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    color: "bg-primary/15 text-primary",
    items: ["Adobe Photoshop"],
  },
  {
    title: "UX/UI Design",
    icon: PenTool,
    color: "bg-accent/30 text-accent-foreground",
    items: ["Adobe XD", "Adobe Illustrator", "Figma"],
  },
  {
    title: "Language",
    icon: Languages,
    color: "bg-secondary text-secondary-foreground",
    items: ["Thai (Native)", "English (Normal)"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">ข้อมูล</h2>
          </div>

          {/* Personal Info Card */}
          <motion.div
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-8"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4">ข้อมูลส่วนตัว</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground min-w-[70px]">
                    {info.label}
                  </span>
                  <span className="text-foreground/90 font-medium">{info.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Skills
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-2xl p-5 shadow-sm border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${category.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 text-xs font-medium border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
