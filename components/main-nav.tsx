"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();


    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6 "
        >
            <div className="lg:hidden">
                <NavigationMenu >
                    <NavigationMenuList >
                        <NavigationMenuItem >
                            <NavigationMenuTrigger>Catergories</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {routes.map((route) => (
                                    <NavigationMenuLink
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                            'flex flex-wrap text-sm font-medium transition-colors hover:text-black p-3 bg-white',
                                            route.active ? 'text-black' : 'text-neutral-500'
                                        )}
                                    >
                                        {route.label}
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="mx-6 items-center  space-x-4 lg:space-x-6 hidden lg:flex">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            'flex flex-wrap text-sm font-medium transition-colors hover:text-black',
                            route.active ? 'text-black' : 'text-neutral-500'
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </div>


        </nav>
    )
};

export default MainNav;