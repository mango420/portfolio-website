'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const links = [
    { href: '#about', label: 'About me' },
    { href: '#projects', label: 'Projects' },
    { href: '#writeups', label: 'Write Ups' },
    { href: '#socials', label: 'Socials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className="fixed top-4 right-6 z-50 flex space-x-6 py-2 text-[18px] text-white/70"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-white cursor-pointer transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  )
}
