import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function FullyFun() {
  return (
    <section className="pb-10 bg-background p-4 text-foreground flex flex-col gap-10 items-center justify-center">
      
      <div className="w-full max-w-[1250px] py-16 md:py-28 flex flex-col lg:flex-row gap-6 justify-center items-center ">
        <div className="space-y-3 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          100% your data
          </h1>
          <p className="text-md md:text-lg max-w-xl">
          The app is open source and your notes are saved to an open format, so you will always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          <Button className="bg-secondary  hover:bg-secondary/90 px-5 flex gap-3">
          Lets Go
          <ArrowRight />
          </Button>
        </div>
        <div className="relative w-full h-full lg:w-1/2 flex justify-center ">
          <Image src="/images/work.png"  width={700} height={700} alt="shape" className="w-full  h-full"/>
        </div>
      </div>
      
      
    
    </section>
  )
}

