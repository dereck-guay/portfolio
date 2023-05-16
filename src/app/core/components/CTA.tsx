import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import type { FC } from "react";

export interface CTAProps {
    href: Url;
    children: React.ReactNode;
}

const CTA: FC<CTAProps> = ({ children, href }) => {
    return (
        <Link
            className="inline-flex items-center justify-center px-4 py-2 text-xl"
            href={href}
        >
            {children}
        </Link>
    );
};

export default CTA;
