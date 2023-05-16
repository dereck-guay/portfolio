import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Navbar: FC = () => {
    return (
        <nav className="border-b border-gray-800">
            <div className="container flex justify-between items-center py-5 ">
                <div>
                    <Link className="flex items-center" href="/">
                        <Image
                            src="/logo.svg"
                            width={40}
                            height={40}
                            alt="Dereck Guay Logo"
                        />
                        <h1 className="text-xl font-bold -ml-2">ereck</h1>
                    </Link>
                </div>
                <div>Some links</div>
            </div>
        </nav>
    );
};

export default Navbar;
