import { motion } from "framer-motion";
import React from "react";
import ContactLink from "../components/talk/ContactLink";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import TimeStatus from "../components/talk/TimeStatus";
import Spotify from "../components/Spotify";

const Index = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-36 w-full"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">./ home</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12"> 
            Software was meant to be light and feel effortless to use. As we're all developing new products so rapidly, bloat in our code is catching up with us. I design simple but effective, highly-scalable and real time products for the future.
            </p>

            <Spotify />
        </motion.div>

        

    );
};

export default Index;
