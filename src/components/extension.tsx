import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LucideSquareArrowOutUpRight } from "lucide-react"

export function Extension() {
  return (
    <section className="bg-primary p-4 relative text-primary-foreground py-7 flex flex-col gap-10 items-center justify-center ">
      <Image src="/images/shape2.png" width={400} height={600} alt="shape" className="absolute w-screen object-cover left-0 "/>

      <div className="w-full max-w-[1250px] py-10 flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="space-y-2 w-full lg:w-1/2">
        <h1 className="relative text-4xl sm:text-4xl lg:text-5xl font-extrabold text-white">
        Use as Extension
      <Image src="/images/shape7.png" width={400} height={60} alt="shape" className="absolute -mt-2  "/>
          </h1>
          
          <p className="text-md md:text-lg text-white/80 max-w-xl font-medium">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <Button className="bg-secondary font-semibold hover:bg-secondary/90 px-5 flex gap-3">
            Try Whitepace free
            <LucideSquareArrowOutUpRight    />
          
          </Button>
        </div>
        <div className="relative w-full h-full lg:w-1/2 flex justify-start ">
          <Image src="/images/extension.png"  width={700} height={700} alt="shape" className="w-full md:w-[80%]  h"/>
        </div>
      </div>
    </section>
  )
}