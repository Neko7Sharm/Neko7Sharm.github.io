"use client"

import { motion } from "framer-motion"
import { Mail, Github, Facebook, MessageCircle } from "lucide-react"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "phuwadech@example.com",
    href: "mailto:phuwadech@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/phuwadech",
    href: "https://github.com/phuwadech",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/phuwadech",
    href: "https://facebook.com/phuwadech",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">ช่องทางติดต่อ</h2>
          </div>

          <motion.div
            className="grid gap-4 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border flex items-center gap-4 group"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
