import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WorkEverywhere() {
  return (
    <section className="relative  md:py-10 md:my-10 bg-primary p-4 overflow-clip text-primary-foreground flex flex-col gap-10 items-center justify-center">
      <Image src="/images/shape1.png" width={400} height={600} alt="shape" className="absolute left-0 opacity-10 md:opacity-25"/>
      <div className="w-full max-w-[1250px] py-16 md:py-20 flex flex-col gap-3 justify-center items-center ">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          Your work, everywhere you are
          </h1>
          <p className="max-w-4xl  md:text-center">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <Button className="self-start md:self-center bg-secondary  hover:bg-secondary/90 px-5 flex gap-3">
          Try Taskey
          <ArrowRight />
          </Button>
       
      </div>
      
      
    
    </section>
  )
}

