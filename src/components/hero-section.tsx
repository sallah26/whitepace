import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Navbar } from "./navbar"
import { LucideSquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
 
 

export function HeroSection() {
  return (
    <section className={cn( " bg-primary p-4 relative text-primary-foreground py-4 md:py-7 flex flex-col gap-20 md:gap-10 items-center justify-center ")}>
        <Navbar />
      <Image src="/images/shape2.png" width={400} height={600} alt="shape" className="absolute w-screen object-none md:object-cover left-0 "/>
      <div className="w-full font-serif max-w-[1250px] py-1 flex flex-col lg:flex-row md:gap-10 justify-center items-center ">
        <div className="space-y-4 w-full lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white">
            Get More Done with whitepace
          </h1>
          <p className="text-md md:text-lg text-white/80 max-w-xl font-medium">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
          <Button className=" bg-secondary font-semibold hover:bg-secondary/90 px-5 flex gap-3">
            Try Whitepace free
            <LucideSquareArrowOutUpRight    />
          
          </Button>
        </div>
        <div className="relative w-full h-full lg:w-1/2 flex justify-center ">
          <Image src="/images/team.png"  width={700} height={700} alt="shape" className="w-full  h-full"/>
        </div>
      </div>
    </section>
  )
}