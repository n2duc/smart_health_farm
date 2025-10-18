import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import Logo from "./logo";
import menu from "@/config/menu.json";
import Link from "next/link";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileNavbar({ isOpen, onClose, pathname }: MobileNavbarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <Logo />
          <SheetTitle className="sr-only">Mobile Navbar</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4">
          {menu.navigationMenu.map((item) => (
            <Link key={item.label} href={item.href} onClick={onClose} className={cn(
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
