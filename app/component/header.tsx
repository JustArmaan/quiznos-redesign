"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <div className="w-full bg-black text-white py-4 text-center h-14 fixed top-0">
            <Link
                href="/"
                className="float-left"
                onClick={() => window.history.back()}
            >
                <Image
                    src="/arrowLeft.svg"
                    alt="Back"
                    width={30}
                    height={30}
                    className="ml-4"
                />
            </Link>
            {showLogo ? (
                <Link
                    href="/Rewards"
                    className="absolute left-1/2 transform -translate-x-1/2"
                >
                    <Image
                        src="/quiznos-logo.png"
                        alt="QUIZNOS Logo"
                        width={120}
                        height={40}
                        className=""
                    />
                </Link>
            ) : (
                <h1 className="text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
                    {title}
                </h1>
            )}
            <Link href="/" className="float-right">
                <Image
                    src="/notification.svg"
                    alt="Back"
                    width={23}
                    height={23}
                    className="mr-4"
                />
            </Link>
        </div>
    );
};

export default Header;
