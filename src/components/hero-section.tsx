import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Navbar } from "./navbar"
import { LucideSquareArrowOutUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-7 flex flex-col gap-10 items-center justify-center ">
        <Navbar />
      <div className="w-full max-w-[1250px] py-40 flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="space-y-6 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Get More Done with whitepace
          </h1>
          <p className="text-lg text-white/80 max-w-xl font-medium">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
          <Button className="bg-secondary font-semibold hover:bg-secondary/90 px-5 flex gap-3">
            Try Whitepace free
            <LucideSquareArrowOutUpRight    />
          
          </Button>
        </div>
        <div className="relative w-full h-full lg:w-1/2 bg-red-500">
          lorem
        </div>
      </div>
    </section>
  )
}