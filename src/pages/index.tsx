import { useState, useEffect } from "react";
import Image from "next/image";
import Status from "../components/Status";

const Index = () => {
    const [lastCommit, setLastCommit] = useState({
        hash: "",
        date: "",
        loading: true,
    });

    useEffect(() => {
        const fetchLastCommit = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/saigonu/personal-website/commits/main");
                const data = await response.json();
                const hash = data.sha.substring(0, 7);
                const date = new Date(data.commit.author.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                });
                setLastCommit({
                    hash,
                    date,
                    loading: false,
                });
            } catch (error) {
                console.error("Error fetching commit info:", error);
                setLastCommit(prev => ({ ...prev, loading: false }));
            }
        };
        fetchLastCommit();
    }, []);

    return (
        <div className="mt-36 w-full text-center">
            <div></div>
            <h1 className="mt-24 font-bold text-4xl md:text-5xl mb-12 text-left">Sai Gonuguntla</h1>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12 text-left">
                Software was envisioned to embody, be light, and easy for usage. However, as we forge ahead with the
                rapid development of new products, the burden of bloated code is beginning to take its toll. I am on a
                mission for creating simple but effective, highly-scalable and real-time products for the future.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-6 tracking-wide mb-12 text-left text-sm">
                {lastCommit.loading ? (
                    "Loading last updated info..."
                ) : lastCommit.hash ? (
                    <>
                        * This website was last updated{" "}
                        <a
                            href="https://github.com/saigonu/personal-website"
                            className="underline underline-offset-2 decoration-1 hover:text-white"
                        >
                            @{lastCommit.hash}
                        </a>{" "}
                        on {lastCommit.date}.
                    </>
                ) : (
                    "Last updated: January 2025"
                )}
            </p>
            <Status />
        </div>
    );
};

export default Index;
