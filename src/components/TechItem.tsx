import { IconType } from "react-icons";
import { useState } from "react";
import { useSpring, animated } from 'react-spring';

interface TechProps {
    name: string;
    icon: IconType;
}

export const TechItem = ({ icon: Icon, name }: TechProps) => {
    const [hovered, setHovered] = useState(false);

    const springProps = useSpring({
        opacity: hovered ? 0.8 : 1,
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        config: { duration: 200 },
    });

    return (
        <animated.li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={springProps}
            className="flex flex-col items-center p-2 cursor-pointer"
        >
            <span className="mb-1">{Icon({ className: 'h-6 w-6' })}</span>
            <span>{name}</span>
        </animated.li>
    );
};
