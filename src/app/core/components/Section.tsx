import type { FC, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    gradient?: boolean;
}

const Section: FC<SectionProps> = ({ gradient, ...props }) => {
    return (
        <section
            className={`
				px-4 py-20
                ${
                    gradient
                        ? "bg-gradient-to-br from-slate-900 to-orange-500"
                        : ""
                }
				`}
            {...props}
        />
    );
};

export default Section;
