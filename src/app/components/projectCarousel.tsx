'use client'

import { projects } from '../data/mockdata'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0)
  const project = projects[current]

  const next = () => setCurrent((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <motion.section
      className="mx-auto mt-20 max-w-5xl flex flex-col items-center space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id='projects'
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="w-full text-center"
        >
          <h3 className="text-4xl font-libre mb-2">{project.title}</h3>
          <p className="text-white/80 text-lg mb-4">{project.description}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-blue-400 font-semibold 
                       after:absolute after:left-0 after:-bottom-0.5 
                       after:h-[2px] after:w-0 after:bg-blue-400 
                       after:transition-all after:duration-300 
                       hover:after:w-full hover:text-blue-300"
          >
            View Project
          </a>

          <div className="mt-6 flex justify-center">
            <Image
              src={project.image}
              alt={project.title}
              width={700}
              height={400}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          onClick={prev}
          className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
          aria-label="Previous project"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
          aria-label="Next project"
        >
          ▶
        </button>
      </motion.div>
    </motion.section>
  )
}
