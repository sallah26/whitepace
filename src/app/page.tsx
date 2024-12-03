import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectManagement } from "@/components/project-management"
import { WorkTogether } from "@/components/work-together"
import { CustomizeNeeds } from "@/components/customize-needs"
import PricingPlans from "@/components/pricing"
import { WorkEverywhere } from "@/components/work-everywhere"
import { FullyFun } from "@/components/100%"
import { Sponsors } from "@/components/sponsors"
import { Favorite } from "@/components/favourite"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
      <main className="min-h-screen min-w-screen bg-background items-center justify-center">
        <HeroSection /> 
        <ProjectManagement />
        <WorkTogether />
        <CustomizeNeeds />
        <PricingPlans />
        <WorkEverywhere />
        <FullyFun />
        <Sponsors />
        <Favorite />
        <Testimonials />
      </main>
  )
}

