import { useSpring, animated } from "react-spring";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

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

const RepoItem = ({ name, description, stars, forks, language }: RepoProps) => {
  const normalizedLanguage = language || 'default';
  const languageColor = Languages[normalizedLanguage as keyof typeof Languages];

  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1], 
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <a href={`https://github.com/saigonu/${name}`} rel="noreferrer" target="_blank">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: xys.to(trans) }}
        className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 duration-300 shadow-lg cursor-pointer"
      >
        <h2 className="font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
        <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
          <p className="flex flex-row items-center">
            <animated.div
              className=""
              style={{ background: languageColor, border: `solid 0px ${languageColor}` }}
            />
            {normalizedLanguage === 'default' ? 'Python' : normalizedLanguage}
          </p>

          <p className="flex flex-row items-center justify-center">
            <AiOutlineStar className="mr-1 w-4 h-4" /> {stars}
          </p>
          <p className="flex flex-row items-center justify-center">
            <BiGitRepoForked className="mr-1 w-4 h-4" /> {forks}
          </p>
        </div>
      </animated.div>
    </a>
  );
};

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.05,
];

const trans = (x: number, y: number, s: number): string => 
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default RepoItem;

