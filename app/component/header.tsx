"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();

    let title = "";
    let showLogo = false;

    if (pathname === "/Rewards") {
        showLogo = true;
    } else if (pathname === "/Promotions") {
        title = "Promotions";
    } else if (pathname === "/Profile") {
        title = "Profile";
    }

    if (!showLogo && !title) return null;

    return (
        <div className="w-full bg-black text-white py-4 text-center">
            {showLogo ? (
                <Image
                    src="/quiznos-logo.png"
                    alt="QUIZNOS Logo"
                    width={120}
                    height={40}
                    className="mx-auto"
                />
            ) : (
                <h1 className="text-lg font-semibold">{title}</h1>
            )}
        </div>
    );
};

export default Header;
