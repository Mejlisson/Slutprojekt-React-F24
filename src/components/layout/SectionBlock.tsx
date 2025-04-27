import { ReactNode } from "react";

interface SectionBlockProps {
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