import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import {
    SiTypescript,
    SiJavascript,
    SiGo,
    SiPython,
    SiCplusplus,
    SiSwift,
    SiDotnet,
    SiJupyter,
    SiLua,
} from "react-icons/si";

const Languages = {
    TypeScript: "#2b7489",
    Python: "#3572A5",
    default: "#6B7280",
};

interface RepoProps {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string | null;
}

const languageIcons: { [key: string]: JSX.Element } = {
    "TypeScript": <SiTypescript size={16} />,
    "JavaScript": <SiJavascript size={16} />,
    "Go": <SiGo size={16} />,
    "Python": <SiPython size={16} />,
    "C++": <SiCplusplus size={16} />,
    "Swift": <SiSwift size={16} />,
    ".NET": <SiDotnet size={16} />,
    "Jupyter Notebook": <SiJupyter size={16} />,
    "Lua": <SiLua size={16} />,
};

const ROTATION_RANGE = 13;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const RepoItem = ({ name, description, stars, forks, language }: RepoProps) => {
    const normalizedLanguage = language || "default";

    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) / width;
        const mouseY = (e.clientY - rect.top) / height;

        const rX = (mouseY - 0.5) * ROTATION_RANGE;
        const rY = (mouseX - 0.5) * -ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <a href={`https://github.com/saigonu/${name}`} rel="noreferrer" target="_blank">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform }}
                className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 shadow-lg cursor-pointer"
            >
                <h2 className="font-semibold mb-1">{name}</h2>
                <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                </p>
                <div className="mt-auto flex flex-row items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                    <div className="flex flex-row items-center">
                        {language && languageIcons[language] && (
                            <span className="flex items-center">
                                {languageIcons[language]}
                                <span className="ml-2">
                                    {normalizedLanguage === "default" ? "TypeScript" : normalizedLanguage}
                                </span>
                            </span>
                        )}
                        {(!language || !languageIcons[language]) && (
                            <span className="text-gray-500">No Language Specified</span>
                        )}
                    </div>
                    <p className="flex flex-row items-center">
                        <AiOutlineStar className="mr-1 w-4 h-4" /> {stars}
                    </p>
                    <p className="flex flex-row items-center">
                        <BiGitRepoForked className="mr-1 w-4 h-4" /> {forks}
                    </p>
                </div>
            </motion.div>
        </a>
    );
};

export default RepoItem;
