import React, { useEffect, useState } from "react";
import { SiFirebase, SiMysql, SiAmazonaws, SiCplusplus, SiAmazondynamodb, SiAngular } from "react-icons/si";
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

interface Repo {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

const Tech = () => {
    const [publicRepos, setPublicRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPublicRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/saigonu/repos?type=public&per_page=100`);
                if (!response.ok) {
                    throw new Error(`Error fetching public repositories: ${response.statusText}`);
                }
                const repos = await response.json();
                setPublicRepos(repos);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPublicRepos();
    }, []);

    const filteredRepos = publicRepos.filter(repo => repo.name !== "saigonu");

    return (
        <div className="mt-36 w-full">
            <h1 className="mt-39 font-bold text-4xl md:text-5xl mb-12">Tech</h1>

            <h2 className="font-medium text-3xl mb-12">I.</h2>
            <h3 className="font-medium text-xl mb-12">Tech Stack</h3>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                My expertise spans a diverse range of programming languages, cutting-edge technologies, and
                industry-standard development tools. This versatility allows me to adapt to various project requirements
                and deliver optimal solutions.
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
        </div>
    );
};

export default Tech;
