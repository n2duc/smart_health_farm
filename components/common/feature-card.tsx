import { FeatureItem } from "@/types";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <div className="p-6 border border-t-4 border-t-primary space-y-8">
      <div className="space-y-3">
        <div className="flex items-center justify-center size-12 bg-secondary">
          <feature.icon className="size-6" />
        </div>
        <h3 className="text-xl font-semibold">{feature.title}</h3>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">{feature.description}</p>
        <ul className="list-none text-sm text-muted-foreground space-y-2">
          {feature.list.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Zap className="size-3 text-foreground" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <Link href={feature.href}>
          <Button variant="ghost" className="w-full">
            Trải nghiệm ngay <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
