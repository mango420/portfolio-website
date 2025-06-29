import { Project } from '../types/Project'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js and Tailwind CSS.',
    image: '/pictures/portfolio.png',
    link: 'https://example.com/portfolio',
  },
  {
    id: '2',
    title: 'CTF Platform',
    description: 'A platform to host and play Capture the Flag challenges.',
    image: '/projects/ctf.png',
    link: 'https://example.com/ctf',
  },
  {
    id: '3',
    title: 'Game Stats Tracker',
    description: 'Track stats for your favorite games with real-time updates.',
    image: '/projects/stats.png',
    link: 'https://example.com/stats',
  },
]
