import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
    const [commitDate, setCommitDate] = useState<string>(new Date().toDateString());
    const commitHash = process.env.VERCEL_GIT_COMMIT_SHA || "Unknown";

    useEffect(() => {
        const fetchCommitDate = async () => {
            try {
                const response = await axios.get(
                    `https://api.github.com/repos/saigonu/personal-website/commits/${commitHash}`
                );
                const date = new Date(response.data.commit.committer.date);
                setCommitDate(date.toDateString());
            } catch (error) {
                console.error("Error fetching commit date:", error);
                setCommitDate("Unknown");
            }
        };

        if (commitHash !== "Unknown") {
            fetchCommitDate();
        }
    }, [commitHash]);

    return (
        <footer className="w-full flex justify-center fixed bottom-10 right-10">
            <h2 className="text-black/60 dark:text-white/30 text-sm">
                Last updated with commit{" "}
                <a
                    className="text-gray-400"
                    href={`https://github.com/saigonu/personal-website/commit/${commitHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {commitHash}
                </a>{" "}
                on {commitDate}
            </h2>
        </footer>
    );
};

export default Footer;
