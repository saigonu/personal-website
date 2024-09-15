import React from "react";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FiMail } from "react-icons/fi";
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
            I am a 4th year Computer Science undergraduate at UC Davis who 
            is passionate about exploring software technology and tackling complex challenges and driving meaningful impact through 
            innovative product development. I have experience with developing robust full-stack web applications and creating engaging 
            iOS applications and constantly looking for new opportunities to explore new fields and push my boundaries currently in cloud computing.
            </p>

            <h2 className="font-medium text-3xl mb-12">II.</h2>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
            In the past, I have interned as a Software Engineer at Alameda County's government office in which I developed a full-stack 
            self-service reports dashboard web application with AngularJS, .NET, MySQL database. I am open to new positions.
                </p>
        </motion.div>
    );
};

export default About;
