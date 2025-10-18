"use client";

import { Heart, Menu, QrCode, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Logo from "./logo";
import ThemSwitcher from "./them-switcher";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { useState } from "react";
import MobileNavbar from "./mobile-navbar";
import AuthDialog from "./auth-dialog";

interface INavigationItem {
  label: string;
  href: string;
  subMenu?: {
    label: string;
    href: string;
  }[];
}

interface AppNavigationItemProps {
  item: INavigationItem;
  pathname: string;
}

const AppNavigationItem = ({ item, pathname }: AppNavigationItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className={cn(
              "text-sm font-medium py-2 px-3 inline-block hover:bg-accent hover:text-accent-foreground", 
              pathname === item.href && "border-b-2 border-primary"
            )}
          >
          {item.label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleToggleAuthModal = (mode: "login" | "register") => {
    setIsAuthModalOpen(!isAuthModalOpen);
    setAuthMode(mode);
  }

  return (
    <>
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
        <div className="container mx-auto flex h-(--header-height) items-center justify-between gap-2 **:data-[slot=separator]:!h-4 px-3 lg:px-0">
          <Logo />
          <NavigationMenu className="hidden lg:flex items-center gap-2">
            <NavigationMenuList>
              {menu.navigationMenu.map((item) => (
                <AppNavigationItem key={item.label} item={item} pathname={pathname} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <QrCode />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" onClick={() => handleToggleAuthModal("login")}><User /> <span className="hidden xl:inline">Đăng nhập</span></Button>
              <Button onClick={() => handleToggleAuthModal("register")}>Đăng ký</Button>
            </div>
            <Separator orientation="vertical" />
            <ThemSwitcher />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={handleToggleMenu}>
              <Menu />
            </Button>
          </div>
        </div>
        <MobileNavbar isOpen={isMenuOpen} onClose={handleToggleMenu} pathname={pathname} />
      </header>

      <AuthDialog
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  )
}
