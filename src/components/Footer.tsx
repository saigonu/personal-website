import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
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
        <div className="w-full bg-[#0d0d0d]">
            <motion.div className="w-full md:w-[50rem] mx-auto  px-11 py-4 md:py-6">
                <p className="text-sm font-normal text-gray-400">
                    {lastCommit.loading ? (
                        "Loading..."
                    ) : lastCommit.hash ? (
                        <>
                            <div className="blink -translate-x-3/4" />
                            Last updated{" "}
                            <a
                                href="https://github.com/saigonu/personal-website"
                                className="font-bold underline underline-offset-2 decoration-2 hover:no-underline decoration-sky-500"
                            >
                                @{lastCommit.hash}
                            </a>{" "}
                            on {lastCommit.date}
                        </>
                    ) : (
                        "Last updated: January 2025"
                    )}
                </p>
            </motion.div>
        </div>
    );
};

export default Footer;
