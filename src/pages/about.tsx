import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="mt-36 w-full">
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-12">About Me</h1>

            <h2 className="font-medium text-3xl mb-12">I.</h2>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I am a Computer Science graduate from UC Davis who is passionate about exploring software technology and
                tackling complex challenges while driving meaningful impact through innovative product development. I
                have experience with developing robust full-stack web applications and creating engaging iOS
                applications and constantly looking for new opportunities to explore new fields and push my boundaries.
                I'm interested in: full-stack development, cloud computing, DevOps, and machine learning.
            </p>
        </div>
    );
};

export default About;
