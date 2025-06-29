'use client'

import { motion } from 'framer-motion'
import { writeups } from '../data/mockWriteups'

export default function CTFWriteUps() {
  return (
    <motion.section
      className="mx-auto max-w-5xl px-4 mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id='writeups'
    >
      <motion.div
        className="rounded-lg bg-black/30 backdrop-blur-sm p-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-libre mb-8 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          CTF Write-Ups
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {writeups.map((w, index) => (
            <motion.a
              key={w.id}
              href={w.link}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="block p-5 rounded-md bg-black/40 border border-white/10 hover:border-blue-400 transition shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-mono mb-1 text-blue-400">{w.title}</h3>
              <p className="text-white/60 text-sm mb-2 font-mono">
                ({w.ctfName} · {w.date})
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {w.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono text-white/80"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
