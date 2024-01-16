"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push('/cart')} className="flex items-center rounded-md text-sm text-gray-800 bg-white border border-gray-300 px-4 py-2">
                <ShoppingBag
                    size={20}
                    color="black"
                />
                <span className="ml-2 mt-1 text-sm font-bold text-black">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;