'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Welcome() {
  return (
    <motion.div
      className="mx-auto mt-28 max-w-5xl flex items-center justify-between gap-8 rounded-md border border-white/20 bg-black/20 px-22 py-16 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-5xl font-semibold mb-4">
          Hey! <span className="inline-block">👋</span>
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
          className="text-2xl font-mono"
        />
      </div>

      <Image
        src="/pictures/Sableye.png"
        alt="Sableye"
        width={250}
        height={250}
        priority
      />
    </motion.div>
  )
}
