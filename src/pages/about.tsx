import React from "react";
import ContactLink from "../components/talk/ContactLink";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import TimeStatus from "../components/talk/TimeStatus";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >

<h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">./ about me</h1>

<h2 className="font-medium text-3xl mb-4">who...?</h2>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
            I am a Computer Science undergraduate at University of California, Davis (expected June 2025 B.S. degree) who 
            is passionate about exploring software technology and tackling complex challenges and driving meaningful impact through 
            innovative product development. I have experience with developing robust full-stack web applications and creating engaging 
            iOS applications and constantly looking for new opportunities to explore new fields and push my boundaries currently in cloud computing.
            </p>

            <h2 className="font-medium text-3xl mb-4">where...?</h2>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
            In the past, I have interned as a Software Engineer at Alameda County's government office in which I developed a full-stack 
            self-service reports dashboard web application with AngularJS, .NET, MySQL database. 

            I have also worked at a Stealth Startup, as a Software Engineer Intern developing hundreds of components for a React Native 
            app that serves as the next generation multichain crypto wallet.

                </p>
    
        </motion.div>
    );
};

export default About;
