import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-12">About Me</h1>

            <h2 className="font-medium text-3xl mb-12">I.</h2>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I am a Computer Science graduate from{" "}
                <a
                    href="https://www.ucdavis.edu/"
                    className="font-bold underline underline-offset-2 decoration-2 hover:no-underline decoration-sky-500"
                >
                    UC Davis
                </a>{" "}
                who is passionate about exploring software technology and tackling complex challenges while driving
                meaningful impact through innovative product development. I have experience with developing robust
                full-stack web applications and creating engaging iOS applications and constantly looking for new
                opportunities to explore new fields and push my boundaries. I'm interested in: full-stack development,
                cloud computing, DevOps, and machine learning.
            </p>
        </motion.div>
    );
};

export default About;
