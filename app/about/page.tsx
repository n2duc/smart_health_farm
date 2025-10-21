import SectionWrapper from "@/components/site/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Về chúng tôi",
}

export default function AboutPage() {
  return (
    <SectionWrapper>
      <h1>AboutPage</h1>
      <Button>Click me</Button>
      <Input type="text" placeholder="Enter your name" />
    </SectionWrapper>
  )
}