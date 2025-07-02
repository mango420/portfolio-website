'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Welcome() {
  return (
    <motion.div
      className="mx-auto mt-28 max-w-5xl flex items-center justify-between gap-8 rounded-md border border-white/20 bg-black/20 px-10 md:px-14 py-14 backdrop-blur-md"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-5xl font-libre mb-4">
          Hey! Weclome to Mangos Space. 👋
        </h1>
        <TypeAnimation
          sequence={[
            'I am a Software Dev',
            2000,
            'I am an Open Source Enthusiast',
            2000,
            'I am a Hacker',
            2000,
            'I am a Gamer',
            2000,
            '',
            0,
          ]}
          wrapper="p"
          speed={50}
          deletionSpeed={40}
          repeat={Infinity}
          className="text-2xl font-pridi"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img
          src="/Sableye.png"
          alt="Sableye"
          width={300}
          height={300}
        />
      </motion.div>
    </motion.div>
  )
}
