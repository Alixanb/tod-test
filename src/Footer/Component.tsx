import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'

import type { Footer } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border dark:bg-card text-black">
      <div className="container py-12 gap-8 grid grid-cols-1 md:grid-cols-4">
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col gap-4">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-white hover:text-gray-300">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Youtube size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Column 2: Use cases */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Use cases</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="hover:underline">UI design</Link>
            <Link href="#" className="hover:underline">UX design</Link>
            <Link href="#" className="hover:underline">Wireframing</Link>
            <Link href="#" className="hover:underline">Diagramming</Link>
            <Link href="#" className="hover:underline">Brainstorming</Link>
            <Link href="#" className="hover:underline">Online whiteboard</Link>
            <Link href="#" className="hover:underline">Team collaboration</Link>
          </nav>
        </div>

        {/* Column 3: Explore */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Explore</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="hover:underline">Design</Link>
            <Link href="#" className="hover:underline">Prototyping</Link>
            <Link href="#" className="hover:underline">Development features</Link>
            <Link href="#" className="hover:underline">Design systems</Link>
            <Link href="#" className="hover:underline">Collaboration features</Link>
            <Link href="#" className="hover:underline">Design process</Link>
            <Link href="#" className="hover:underline">FigJam</Link>
          </nav>
        </div>

        {/* Column 4: Resources */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Resources</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="hover:underline">Blog</Link>
            <Link href="#" className="hover:underline">Best practices</Link>
            <Link href="#" className="hover:underline">Colors</Link>
            <Link href="#" className="hover:underline">Color wheel</Link>
            <Link href="#" className="hover:underline">Support</Link>
            <Link href="#" className="hover:underline">Developers</Link>
            <Link href="#" className="hover:underline">Resource library</Link>
          </nav>
        </div>
      </div>
      
  
      <div className="container py-4 border-t border-gray-800 flex justify-between items-center">
         <ThemeSelector />
         <p className="text-sm text-gray-500">© 2025 Tod Test. All rights reserved.</p>
      </div>
    </footer>
  )
}
