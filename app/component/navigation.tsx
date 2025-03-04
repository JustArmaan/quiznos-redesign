import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="fixed bottom-0 w-full bg-black py-3">
            <div className="flex justify-center">
                <ul className="flex gap-x-10 text-white">
                    <li>
                        <Link href="/Order">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/order.png"
                                    alt="Order icon"
                                    width={20}
                                    height={20}
                                />
                                <p>Order</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Rewards">
                            <p>Rewards</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Promotions">
                            <p>Promotions</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Profile">
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
