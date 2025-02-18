import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RepoItem from "../components/RepoItem";

interface Repo {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

const Projects = () => {
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
            <h1 className="mt-39 font-bold text-4xl md:text-5xl mb-12">Projects</h1>

            <h2 className="font-medium text-3xl mb-12">I.</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-6">
                I am deeply committed to continuous growth and innovation. This commitment manifests through my active
                engagement in developing open-source projects, which serve as a testament to my expanding expertise in
                tools, languages, and frameworks. Additionally, I regularly participate in hackathons focused on social
                good, fostering collaborative problem-solving for a positive impact on society. These endeavors showcase
                my skills and reflect my dedication to contributing meaningfully.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-2 mb-12 gap-2">
                {filteredRepos.map(repo => (
                    <RepoItem
                        key={repo.name}
                        name={repo.name}
                        description={repo.description || "No description"}
                        stars={repo.stargazers_count}
                        forks={repo.forks_count}
                        language={repo.language}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
