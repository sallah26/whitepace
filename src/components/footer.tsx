import Link from "next/link"
import { ArrowRight, Facebook, Linkedin, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#003B7B] text-white flex flex-col gap-6 pt-10 items-center justify-center">
       <div className="max-w-3xl mx-auto space-y-6 py-6 flex flex-col justify-center">
        <h1 className="text-4xl text-center md:text-6xl font-bold tracking-tight">
          Try Whitepace today
        </h1>
        <div className="space-y-2 text-center justify-center">
          <p className="text-xl md:text-2xl">
            Get started for free.
          </p>
          <p className="text-xl md:text-2xl">
            Add your whole team as your needs grow.
          </p>
        </div>
        
        <div className="space-y-4 text-center">
          <Button 
            size="lg"
            className="bg-[#4B9EFF] hover:bg-[#3B8EEF] text-white px-8 py-6 text-lg rounded-md"
          >
            Try Taskey free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div>
            <p className="text-lg mt-4">
              On a big team?{" "}
              <a 
                href="#contact-sales" 
                className="text-[#4B9EFF] hover:underline"
              >
                Contact sales
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8">
          <img
            src="/images/apple.png"
            alt="Apple"
            className="h-10 w-10"
          />
          <img
            src="/images/windows-logo.png"
            alt="Windows"
            className="h-10 w-10"
          />
          <img
            src="/images/android-logo.png"
            alt="Android"
            className="h-10 w-10"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-bold">whitepace</span>
            </div>
            <p className="text-sm text-gray-200">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/overview">Overview</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/customer-stories">Customer stories</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/guides">Guides & tutorials</Link></li>
              <li><Link href="/help">Help center</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/media-kit">Media kit</Link></li>
            </ul>
          </div>

          {/* Try It Today Section */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Try It Today</h3>
            <p className="text-sm mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <Button className="bg-[#4B97FF] hover:bg-[#3A86FF] text-white">
              Start today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-sm">English</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <Link href="/terms" className="text-sm">Terms & privacy</Link>
            <Link href="/security" className="text-sm">Security</Link>
            <Link href="/status" className="text-sm">Status</Link>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm">©2021 Whitepace LLC.</span>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

