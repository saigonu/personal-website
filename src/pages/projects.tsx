import React from "react";
import { SiFirebase, SiJava, SiMysql, SiAmazonaws, SiCplusplus, SiAmazondynamodb, SiAngular} from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

import {
    SiGit,
    SiDocker,
    SiNextdotjs as SiNextJs,
    SiReact,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiSwift,
    SiJavascript,
    SiPython,
    SiGo,
    SiTerraform,
    SiGrafana,
    SiDotnet,

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

<h1 className="mt-39 font-bold text-4xl md:text-5xl mb-12">Projects</h1>

<h2 className="font-medium text-3xl mb-12">I.</h2>
<h3 className="font-medium text-2xl mb-1">Tech Stack</h3>
<p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                
                I use a lot of languages, technologies, and development tools these are just to name a few, you can also formally find my tech stack on my Resume 
                upon request. 
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiGo} name="Go" />
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
                <TechItem icon={SiTerraform} name="Terraform" />
                <TechItem icon={SiGrafana} name="Grafana" />
                <TechItem icon={SiDotnet} name=".NET" />
            </div>

            <h2 className="font-medium text-3xl mb-12">II.</h2>
        <h3 className="font-medium text-2xl mb-1">Projects</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                I love to create open-sourced projects showing my growing skillset as I learn modern tools, languages, and frameworks and love to collaborate with others through hackathons. 
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-1 grid-rows-2 md:grid-rows-2 mb-12 gap-2">
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
