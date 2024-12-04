import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
 

export function Navbar() {
  return (
    <nav className=" w-full flex justify-center">
      <div className=" flex h-12 md:h-16 items-center justify-between w-full max-w-[1350px]">
        <Image src="/images/Logo.svg" width={200} height={200} alt="logo" className="h-10 w- md:h-16"/>
        <div className="hidden md:flex items-center space-x-10">
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
        <div className="flex md:hidden">
        <DropdownMenu>
      <DropdownMenuTrigger><Menu size={27} className=""/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit bg-secondary text-secondary-foreground">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Products
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Solutions
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Resources
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

      </div>
    </nav>
  )
}

