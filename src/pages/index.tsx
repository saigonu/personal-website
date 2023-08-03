import { motion } from "framer-motion";
import React from "react";
import { SiTwitter, SiDiscord } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Index = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="mt-36 w-full"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Sai Gonuguntla</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12"> 
            Software was envisioned to embody be light and easy for usage. However, as we forge ahead with the rapid development of new products, the burden of bloated code is beginning to take its toll. I design simple but effective, highly-scalable and real time products for the future.
            </p>
        </motion.div>

        

    );
};

export default Index;
