"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 w-full bg-black py-3">
            <div className="flex justify-center">
                <ul className="flex gap-x-10 text-white">
                    {[
                        { name: "ORDER", href: "/Order", icon: "/order.png" },
                        { name: "REWARDS", href: "/Rewards",icon: "/order.png" },
                        { name: "PROMOTION", href: "/Promotions", icon: "/order.png"},
                        { name: "PROFILE", href: "/Profile", icon: "/order.png"},
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="group flex flex-col items-center"
                            >
                                {item.icon && (
                                    <Image
                                        src={item.icon}
                                        alt={`${item.name} icon`}
                                        width={20}
                                        height={20}
                                        className={`transition-colors ${
                                            pathname === item.href
                                                ? "text-[#AFFF00]"
                                                : "text-white"
                                        } group-hover:text-[#AFFF00]`}
                                    />
                                )}
                                <p
                                    className={`font-light text-sm transition-all ${
                                        pathname === item.href
                                            ? "font-semibold"
                                            : ""
                                    } group-hover:font-semibold`}
                                >
                                    {item.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
