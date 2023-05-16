import "@/styles/globals.css";
import "swiper/css";
import { FC } from "react";

export const metadata = {
    title: "Dereck Guay",
    description:
        "Hi, I'm Dereck, web developer! You need a website? Want to increase your business productivity? You're at the right place!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
