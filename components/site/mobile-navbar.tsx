"use client";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Logo from "./logo";
import menu from "@/config/menu.json";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <Logo />
          <SheetTitle className="sr-only">Mobile Navbar</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4">
          {menu.navigationMenu.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className={cn(
              "text-sm font-medium py-2 px-3 inline-block hover:bg-accent hover:text-accent-foreground",
              pathname === item.href && "bg-accent text-accent-foreground border-b"
            )}>
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
