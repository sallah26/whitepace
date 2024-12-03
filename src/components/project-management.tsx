import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ProjectManagement() {
  return (
    <section className="relative py-16 bg-background text-foreground flex flex-col gap-10 items-center justify-center">
      <Image src="/images/shape5.png" width={400} height={400} alt="shape" className="absolute z-0 left-0 opacity-20"/>
      
      <div className="w-full max-w-[1250px] py-28 flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="space-y-6 w-full lg:w-1/2">
          <h1 className="relative text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          Project Management
      <Image src="/images/shape3.png" width={400} height={60} alt="shape" className="absolute left-0 "/>
          </h1>

          <p className="text-lg max-w-xl z-50">
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note. Take photos with the mobile app and save them to a note.
          </p>
        
        </div>
        <div className="relative w-full h-full lg:w-1/2 bg-red-500">
          lorem
        </div>
      </div>
      
      
    
    </section>
  )
}

