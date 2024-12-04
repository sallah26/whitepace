import Image from "next/image"

export function Sponsors() {
  return (
    <section className=" bg-background p-4 text-foreground flex flex-col py-10 md:py-16 gap-10 items-center justify-center">
      
      <div className="w-full max-w-[1250px] pb-4 flex flex-col  gap-5 justify-center items-center ">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold ">
          Our sponsors
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 items-center justify-center w-full max-w-5xl">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/images/apple-logo.svg"
                alt="Apple Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/images/microsoft-logo.svg"
                alt="Microsoft Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/images/Slack-logo.svg"
                alt="Slack Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/images/google-logo.svg"
                alt="Google Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
           
          </div>
         
        </div>
       
      
      
    
    </section>
  )
}
