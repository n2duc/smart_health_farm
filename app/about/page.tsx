import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "About us page",
}

export default function AboutPage() {
  return (
    <div>
      <h1>AboutPage</h1>
      <Button>Click me</Button>
      <Input type="text" placeholder="Enter your name" />
    </div>
  )
}