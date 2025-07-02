'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      className="mx-auto max-w-5xl mt-20 flex flex-col items-center gap-6 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id='contact'
    >
      <motion.h2
        className="text-4xl font-libre mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Contact
      </motion.h2>

      <motion.a
        href="mailto:mango@mango-dev.net"
        whileHover={{ rotate: 15, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <img
          src="/sharingan.png"
          alt="Sharingan"
          width={300}
          height={300}
        />
      </motion.a>

      <motion.p
        className="text-red-500 font-mono mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        (Click here)
      </motion.p>
    </motion.section>
  )
}
