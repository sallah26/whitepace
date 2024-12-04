import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

export default function PricingPlans() {
  return (
    <div className="py-10 max-w-6xl mx-auto">
      <div className="flex flex-col text-center space-y-0 mb-4 justify-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Choose Your Plan
        </h1>
      <Image src="/images/shape6.png" width={200} height={20} alt="shape" className="self-center"/>

        <p className="text-muted-foreground max-w-3xl mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 items-center gap-8">
        {/* Free Plan */}
        <Card className="border-2 h-fit">
          <CardHeader>
            <CardTitle>
              <div className="font-medium mb-4">Free</div>
              <div className="text-4xl font-bold">$0</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">Capture ideas and find them quickly</p>
            <ul className="space-y-3">
              <Feature>Sync unlimited devices</Feature>
              <Feature>10 GB monthly uploads</Feature>
              <Feature>200 MB max. note size</Feature>
              <Feature>Customize Home dashboard and access extra widgets</Feature>
              <Feature>Connect primary Google Calendar account</Feature>
              <Feature>Add due dates, reminders, and notifications to your tasks</Feature>
            </ul>
            <Button className="bg-secondary text-secondary-foreground w-full mt-4" variant="outline">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Personal Plan */}
        <Card className="border-2 bg-[#002B5C] text-white py-10">
          <CardHeader>
            <CardTitle>
              <div className="font-medium mb-4">Personal</div>
              <div className="text-5xl lg:text-6xl font-bold">
                <span className="text-[#FFD700]">$11.99</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">Keep home and family on track</p>
            <ul className="space-y-3">
              <Feature light>Sync unlimited devices</Feature>
              <Feature light>10 GB monthly uploads</Feature>
              <Feature light>200 MB max. note size</Feature>
              <Feature light>Customize Home dashboard and access extra widgets</Feature>
              <Feature light>Customize Home dashboard and access extra widgets</Feature>
              <Feature light>Connect primary Google Calendar account</Feature>
              <Feature light>Add due dates, reminders, and notifications to your tasks</Feature>
            </ul>
            <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Organization Plan */}
        <Card className="border-2 h-fit">
          <CardHeader>
            <CardTitle>
              <div className="font-medium mb-4">Organization</div>
              <div className="text-4xl font-bold">$49.99</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">Capture ideas and find them quickly</p>
            <ul className="space-y-3">
              <Feature>Sync unlimited devices</Feature>
              <Feature>10 GB monthly uploads</Feature>
              <Feature>200 MB max. note size</Feature>
              <Feature>Customize Home dashboard and access extra widgets</Feature>
              <Feature>Connect primary Google Calendar account</Feature>
              <Feature>Add due dates, reminders, and notifications to your tasks</Feature>
            </ul>
            <Button className="bg-secondary text-secondary-foreground w-full mt-4" variant="outline">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Feature({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <Check className={`h-5 w-5 mt-0.5 ${light ? 'text-white' : 'text-primary'}`} />
      <span className="text-sm">{children}</span>
    </li>
  )
}

