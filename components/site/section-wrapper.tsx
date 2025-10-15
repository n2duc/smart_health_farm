import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={cn("py-16 container mx-auto", className)}>
      {children}
    </div>
  )
}