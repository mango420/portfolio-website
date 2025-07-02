'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  const list = [
    { icon: '👨‍💻', label: 'Software Developer' },
    { icon: '🎮', label: 'Gamer' },
    { icon: '⚡', label: 'Hacker' },
  ]

  return (
    <motion.section
      className="mx-auto mt-16 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 rounded-lg border border-white/20 bg-black/30 px-12 py-16 backdrop-blur-md shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id='about'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/Snibunna.png"
          alt="Snibunna"
          width={300}
          height={300}
          className="rounded-md"
        />
      </motion.div>

      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-5xl font-libre mb-4">About me</h2>
        <p className="text-xl font-pridi mb-8 text-white/80">
          I build reliable software, enjoy learning new technologies, and like solving real-world problems with code.
        </p>
        <ul className="space-y-3 text-lg font-biryani">
          {list.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + 0.2 * index, duration: 0.5 }}
              className="flex items-center gap-3 hover:text-white"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white/90">{item.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  )
}
