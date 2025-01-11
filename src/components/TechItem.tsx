import { IconType } from "react-icons";
import { useState } from "react";

interface TechProps {
    name: string;
    icon: IconType;
}

export const TechItem = ({ icon: Icon, name }: TechProps) => {
    return (
        <div className="flex flex-col items-center p-2 border-b">
            <span className="mb-1">{Icon({ className: "h-6 w-6" })}</span>
            <span>{name}</span>
        </div>
    );
};
