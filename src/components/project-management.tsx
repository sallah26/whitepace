import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ProjectManagement() {
  return (
    <section className="py-16 bg-background text-foreground flex flex-col gap-10 items-center justify-center">
      
      <div className="w-full max-w-[1250px] py-28 flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="space-y-6 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          Project Management
          </h1>
          <p className="text-lg max-w-xl">
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <Button className="bg-secondary  hover:bg-secondary/90 px-5 flex gap-3">
          Get Started
          <ArrowRight />
          </Button>
        </div>
        <div className="relative w-full h-full lg:w-1/2 bg-red-500">
          lorem
        </div>
      </div>
      
      
    
    </section>
  )
}

