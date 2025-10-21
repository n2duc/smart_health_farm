"use client";

import { Heart, QrCode, Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ThemSwitcher from "./them-switcher";
import MobileNavbar from "./mobile-navbar";
import AuthActionClient from "../auth/auth-action-client";
import Navbar from "./navbar";

interface SiteHeaderClientProps {
  user: any;
}

export default function SiteHeaderClient({ user }: SiteHeaderClientProps) {
  return (
    <>
      <Navbar />
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
        <AuthActionClient user={user} />
        <Separator orientation="vertical" />
        <ThemSwitcher />
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}
