import React from "react";
import ContactLink from "../components/talk/ContactLink";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import TimeStatus from "../components/talk/TimeStatus";

const Talk = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">./ contact me</h1>
            <p className="text-gray-800 dark:text-gray-200 mb-6">
                Have an inquiry, or want to connect? Feel free to leave a message below, or you can shoot me 
                an email by clicking the envelope on the far-right of my navbar.
            </p>

            <TimeStatus />

        
        </motion.div>
    );
};

export default Talk;
