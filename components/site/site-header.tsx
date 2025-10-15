"use client";

import { Heart, QrCode, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Logo from "./logo";
import ThemSwitcher from "./them-switcher";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigatorItemProps {
  label: string;
  href: string;
  pathname: string;
}

const NavigatorItem = ({ label, href, pathname }: NavigatorItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium py-2 px-3 inline-block hover:bg-accent hover:text-accent-foreground", 
        pathname === href && "border-b-2 border-primary"
      )}
    >
      {label}
    </Link>
  )
}

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-(--header-height) items-center justify-between gap-2 **:data-[slot=separator]:!h-4">
        <Logo />
        <div className="flex items-center gap-2">
          {menu.navigationMenu.map((item) => (
            <NavigatorItem key={item.label} label={item.label} href={item.href} pathname={pathname} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart />
          </Button>
          <Button variant="ghost" size="icon">
            <QrCode />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart />
          </Button>
          <Button variant="outline"><User /> Đăng nhập</Button>
          <Button>Đăng ký</Button>
          <Separator orientation="vertical" />
          <ThemSwitcher />
        </div>
      </div>
    </header>
  )
}
