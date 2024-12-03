import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WorkEverywhere() {
  return (
    <section className="py-16 bg-primary text-primary-foreground flex flex-col gap-10 items-center justify-center">
      
      <div className="w-full max-w-[1250px] py-28 flex flex-col gap-6 justify-center items-center ">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          Your work, everywhere you are
          </h1>
          <p className="max-w-4xl text-center">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <Button className="bg-secondary  hover:bg-secondary/90 px-5 flex gap-3">
          Try Taskey
          <ArrowRight />
          </Button>
       
      </div>
      
      
    
    </section>
  )
}

