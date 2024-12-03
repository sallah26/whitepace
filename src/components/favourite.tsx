import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Navbar } from "./navbar"
import { LucideSquareArrowOutUpRight } from "lucide-react"

export function Favorite() {
  return (
    <section className="bg-primary text-primary-foreground py-7 flex flex-col gap-10 items-center justify-center ">
      <Image src="/images/shape2.png" width={400} height={600} alt="shape" className="absolute w-screen object-cover left-0 "/>
      <div className="w-full max-w-[1250px] py-10 flex flex-col lg:flex-row gap-10 justify-center items-center ">
      <div className="relative w-full h-full lg:w-1/2 flex justify-center ">
          <Image src="/images/Apps.png"  width={700} height={700} alt="shape" className="w-[90%]  h-full"/>
        </div>
        <div className="space-y-6 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="text-lg text-white/80 max-w-xl font-medium">
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <Button className="bg-secondary font-semibold hover:bg-secondary/90 px-5 flex gap-3">
            Try Whitepace free
            <LucideSquareArrowOutUpRight    />
          </Button>
        </div>
      </div>
    </section>
  )
}