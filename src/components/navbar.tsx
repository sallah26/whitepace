import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className=" w-full flex justify-center">
      <div className=" flex h-16 items-center justify-between w-full max-w-[1350px]">
        <Image src="/images/Logo.svg" width={200} height={200} alt="logo" className="h-16"/>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Products
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Solutions
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Resources
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:text-white">
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Try Whitepace free
            </Button>
          </div>
        </div>

      </div>
    </nav>
  )
}

