'use client'

import { motion } from 'framer-motion'

const socials = [
  { id: 'x', name: 'X / Twitter', link: 'https://x.com/mango69_420', icon: '/x.png' },
  { id: 'discord', name: 'Pwn.sh Discord Server (my CTF Team!)', link: 'https://discord.gg/JSDRKU7H', icon: '/discord.png' },
  { id: 'steam', name: 'Steam', link: 'https://steamcommunity.com/id/mangoeis69', icon: '/steam.png' },
  { id: 'fiverr', name: 'Fiverr', link: 'https://www.fiverr.com/s/bdwV4Wq', icon: '/fiverr.png' },
  { id: 'binance', name: 'Binance (Referal Link)', link: 'https://www.binance.com/futures/ref/1087059882', icon: '/binance.png' },
]

export default function Socials() {
  return (
    <motion.section
      className="mx-auto max-w-5xl mt-20 flex flex-col md:flex-row items-center justify-between gap-8 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id="socials"
    >
      <div className="w-full">
        <motion.h2
          className="text-4xl font-libre mb-6 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Socials & Referal Links
        </motion.h2>

        <div className="flex flex-col gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, borderColor: 'rgba(0,200,255,0.5)', boxShadow: '0 0 10px rgba(0,200,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 p-3 rounded-md bg-black/30 border border-white/10 hover:border-blue-400 transition shadow-md hover:shadow-lg min-h-[50px]"
            >
              <img
                src={s.icon}
                alt={s.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-white/90 font-mono text-sm">{s.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src="/Zurrokex.png"
          alt="Zurrokex"
          width={400}
          height={400}
        />
      </motion.div>
    </motion.section>
  )
}
