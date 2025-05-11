import { ReactNode } from "react";

type SectionBlockProps = {
    children: ReactNode;
    className?: string;
}

export default function SectionBlock({ children, className }: SectionBlockProps) {
    return (
        <div className={`bg-gray-300 p-4 shadow-md relative ${className}`}>
            <div className="bg-pink-400">{children}</div>
        </div>
    );
}

//ReactNode för att kunna använda children av komponenten, och prpsför att skicka in props till komponenten.