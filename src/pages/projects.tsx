import React from "react";
import { SiTwitter, SiDiscord, SiFirebase, SiJava, SiMysql, SiAmazonaws, SiHomebrew, SiCplusplus, SiAmazondynamodb, SiAngular } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

import {
    SiVisualstudiocode,
    SiRust,
    SiGit,
    SiDocker,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiYarn,
    SiSwift,
    SiJavascript,
    SiPython,
    SiPrisma,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}


const Projects = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >

<h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Projects</h1>

<h2 className="font-medium text-3xl mb-1">I.</h2>
<h3 className="font-medium text-2xl mb-0">Tech Stack</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                
                I use a lot of languages, technologies, and development tools these are just to name a few, you can also formally find my tech stack on my Resume 
                upon request. 
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border  rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiVisualstudiocode} name="" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiNextJs} name="Next.js" />
                <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
                <TechItem icon={SiCplusplus} name="C++" />
                <TechItem icon={SiFirebase} name="Firebase" />
                <TechItem icon={SiJava} name="Java" />
                <TechItem icon={SiMysql} name="MySQL" />
                <TechItem icon={SiAmazondynamodb} name="DynamoDB" />
                <TechItem icon={SiAngular} name="Angular" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiPython} name="Python" />
                <TechItem icon={SiAmazonaws} name="AWS" />
                <TechItem icon={SiDocker} name="Docker" />
                <TechItem icon={SiSwift} name="Swift" />
            </div>

            <h2 className="font-medium text-3xl mb-1">II.</h2>
        <h3 className="font-medium text-2xl mb-4">Projects</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                {/* I love developing open source projects on{" "}
                <a
                    href="https://github.com/saigonu"
                    rel="noreferrer"
                    className="font-semibold text-blue-500 hover:underline"
                >
                    GitHub
                </a>
                , which is a great way to showcase my projects and learn from others. As logistics all of my open-sourced projects have sported
                me <span className="font-bold text-black dark:text-blue-500">{stats.stars}</span> stars on GitHub, and{" "}
                <span className="font-bold text-black dark:text-blue-500">{stats.forks}</span> forks. Apart from open sourced projects, I do love to develop new SaaS ideas (that lay unfinished in my local machine) and have been working on a smart parking application with bleeding edge technologies.
                Below are some of my most open-sourced work: */}
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 border md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/saigonu`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/saigonu/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );

    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Projects;
