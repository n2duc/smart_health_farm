"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import menu from '@/config/menu.json'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

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

export default function Navbar() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="hidden lg:flex items-center gap-2">
        <NavigationMenuList>
          {menu.navigationMenu.map((item) => (
            <AppNavigationItem key={item.label} item={item} pathname={pathname} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
  )
}
