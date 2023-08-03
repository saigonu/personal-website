import { IconType } from "react-icons";
import { Tooltip } from "react-tippy";

interface TechProps {
    name: string;
    icon: IconType;
}


export const TechItem = ({icon: Icon, name}: TechProps) => {
    return (
        <li className="flex flex-col items-center p-2">
        <span className="mb-1">{Icon({ className: 'h-6 w-6' })}</span>
        <span>{name}</span>
      </li>
    );
};
