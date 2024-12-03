import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution. tool for businesses that is a full project management solution.",
      author: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America",
      image: "/images/avater1.avif",
      variant: "default"
    },
    {
      id: 2,
      text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution. tool for businesses that is a full project management solution.",
      author: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America",
      image: "/images/avater2.jpeg",
      variant: "blue"
    },
    {
      id: 3,  
      text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution. tool for businesses that is a full project management solution.",
      author: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America", 
      image: "/images/avater3.jpeg",
      variant: "blue"
    }
  ]
  return (
    <section className=" bg-background text-foreground flex flex-col gap-10 items-center justify-center">
      <div className="w-full max-w-[1250px] py-16 flex flex-col  gap-10 justify-center items-center ">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          See what our trusted users Say
          </h1>
          <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`${
                testimonial.variant === 'blue' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white'
              }`}
            >
              <CardContent className="p-6 space-y-6">
                <div className="flex gap-2">
                  
                  <Image src={"/images/quote.svg"} className={cn("text-blue-500 ", testimonial.id !== 1 && "invert")} alt="quote" width={40} height={40} />
                  <Image src={"/images/quote.svg"} className={cn("text-blue-500 ", testimonial.id !== 1 && "invert")} alt="quote" width={40} height={40} />
                  {/* <Image src={"/images/quote.svg"} alt="quote" width={40} height={40} /> */}
                </div>
                  <blockquote className="mb-6">
                  <p className="text-sm">{testimonial.text}</p>
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <div className={`font-medium ${
                      testimonial.variant === 'blue' 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}>
                      {testimonial.author}
                    </div>
                    <div className={
                      testimonial.variant === 'blue' 
                        ? 'text-blue-100' 
                        : 'text-gray-500'
                    }>
                      <p className="text-sm">

                      {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
    </section>
  )
}
