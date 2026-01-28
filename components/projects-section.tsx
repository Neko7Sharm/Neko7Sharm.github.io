"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Folder, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "เว็บไซต์พอร์ตโฟลิโอ",
    description: "เว็บไซต์แสดงผลงานส่วนตัวที่สร้างด้วย React และ Tailwind CSS",
    thumbnail: "/projects/portfolio-thumb.jpg",
    images: [
      {
        src: "/projects/portfolio-1.jpg",
        caption: "หน้าแรกของเว็บไซต์พร้อมแบนเนอร์แนะนำตัว",
      },
      {
        src: "/projects/portfolio-2.jpg",
        caption: "ส่วนแสดงผลงานในรูปแบบการ์ด",
      },
      {
        src: "/projects/portfolio-3.jpg",
        caption: "หน้าติดต่อพร้อมฟอร์มส่งข้อความ",
      },
    ],
  },
  {
    title: "แอปจัดการงาน",
    description: "แอปพลิเคชันสำหรับจัดการงานและติดตามความคืบหน้าโปรเจกต์",
    thumbnail: "/projects/taskapp-thumb.jpg",
    images: [
      {
        src: "/projects/taskapp-1.jpg",
        caption: "หน้าหลักแสดงรายการงานทั้งหมด",
      },
      {
        src: "/projects/taskapp-2.jpg",
        caption: "หน้าสร้างงานใหม่พร้อมตั้งค่าต่างๆ",
      },
      {
        src: "/projects/taskapp-3.jpg",
        caption: "แดชบอร์ดสรุปความคืบหน้า",
      },
    ],
  },
  {
    title: "ระบบ E-Commerce",
    description: "ระบบร้านค้าออนไลน์พร้อมระบบชำระเงินและจัดการสินค้า",
    thumbnail: "/projects/ecommerce-thumb.jpg",
    images: [
      {
        src: "/projects/ecommerce-1.jpg",
        caption: "หน้าแสดงสินค้าทั้งหมดพร้อมตัวกรอง",
      },
      {
        src: "/projects/ecommerce-2.jpg",
        caption: "หน้ารายละเอียดสินค้าและรีวิว",
      },
      {
        src: "/projects/ecommerce-3.jpg",
        caption: "หน้าตะกร้าสินค้าและชำระเงิน",
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="projects" className="py-16 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent/30 flex items-center justify-center">
              <Folder className="w-5 h-5 text-accent-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">ผลงาน</h2>
          </div>

          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border group cursor-pointer"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => openProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-card text-sm font-medium">คลิกเพื่อดูรายละเอียด</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && closeProject()}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden" showCloseButton={false}>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 z-10 bg-card/80 hover:bg-card rounded-full"
              onClick={closeProject}
            >
              <X className="w-4 h-4" />
            </Button>
            
            {selectedProject && (
              <>
                <div className="relative aspect-video bg-muted">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedProject.images[currentImageIndex].src || "/placeholder.svg"}
                        alt={selectedProject.images[currentImageIndex].caption}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card rounded-full"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card rounded-full"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </>
                  )}

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === currentImageIndex ? "bg-primary" : "bg-card/60"
                        }`}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-muted-foreground text-sm mt-2 mb-4">
                    {selectedProject.description}
                  </p>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-muted/50 rounded-xl p-3"
                  >
                    <p className="text-sm text-foreground">
                      <span className="font-medium text-primary">
                        ภาพที่ {currentImageIndex + 1}/{selectedProject.images.length}:
                      </span>{" "}
                      {selectedProject.images[currentImageIndex].caption}
                    </p>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
