import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface SectionHeadingProps {
  badge?: React.ReactNode;
  heading: string;
  subHeading: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  heading = 'Heading',
  subHeading = 'Sub Heading',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col text-center items-center gap-4 max-w-3xl mx-auto", className)}>
      {badge && (
        <Badge variant="secondary">
          {badge}
        </Badge>
      )}
      <h2 className="text-4xl font-bold">
        {heading}
      </h2>
      <p className="text-lg font-medium text-muted-foreground">
        {subHeading}
      </p>
    </div>
  )
}
