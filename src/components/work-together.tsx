import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WorkTogether() {
  return (
    <section className="py-10 bg-background text-foreground flex flex-col gap-10 items-center justify-center">
      
      <div className="w-full max-w-[1250px] py-0 flex flex-col lg:flex-row gap-4 justify-center items-center ">
      <div className="relative w-full h-full lg:w-1/2 flex justify-center ">
          <Image src="/images/peoples.png"  width={700} height={700} alt="shape" className="w-[80%]  h-full"/>
        </div>
        <div className="space-y-0 w-full lg:w-1/2">
          <h1 className="relative text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          <span className="z-50">Work Together</span>
      <Image src="/images/shape4.png" width={400} height={20} alt="shape" className="   left-0 z-10 -mt-2"/>

          </h1>
          <p className="text-lg max-w-xl z-20">
          With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

          </p>
          <Button className="bg-secondary  hover:bg-secondary/90 px-5 flex gap-3">
          Try it now
          <ArrowRight />
          </Button>
        </div>
       
      </div>
      
      
    
    </section>
  )
}

