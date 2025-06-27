import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-6 z-50 flex space-x-6 py-2 text-[18px] text-white/70">
      <Link href="#about">
        <span className="hover:text-white cursor-pointer">About me</span>
      </Link>
      <Link href="#projects">
        <span className="hover:text-white cursor-pointer">Projects</span>
      </Link>
      <Link href="#writeups">
        <span className="hover:text-white cursor-pointer">Write Ups</span>
      </Link>
      <Link href="#socials">
        <span className="hover:text-white cursor-pointer">Socials</span>
      </Link>
      <Link href="#contact">
        <span className="hover:text-white cursor-pointer">Contact</span>
      </Link>
    </nav>
  )
}
