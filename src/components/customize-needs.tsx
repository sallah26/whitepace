import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CustomizeNeeds() {
  return (
    <section className="py-16 bg-background text-foreground flex flex-col gap-10 items-center justify-center">
      
      <div className="w-full max-w-[1250px] py-28 flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="space-y-6 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          Customise it to your needs
          </h1>
          <p className="text-lg max-w-xl">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <Button className="bg-secondary  hover:bg-secondary/90 px-5 flex gap-3">
          Let’s Go
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

