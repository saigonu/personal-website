import React from "react";
import MessageComponent from "../components/talk/MessageComponent";
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

            <div className="grid grid-cols-1 md:grid-cols-0 md:gap-4 mb-20">
                <MessageComponent />

                {/* <div className="row-start-1 md:row-auto">
                    <ContactLink
                        name="@0sai"
                        icon={<SiDiscord className="w-6 h-6 text-[#5865F2]" />}
                        link="https://discord.com/users/248540915780681728"
                        borderColor="hover:border-[#5865F2]/50"
                    />

                    <ContactLink
                        name="@evuj"
                        icon={<SiTwitter className="w-6 h-6 text-[#1DA1F2]" />}
                        link="https://twitter.com/evuj"
                        borderColor="hover:border-[#1DA1F2]/50"
                    />

                    <ContactLink
                        name=""
                        icon={<FiMail className="w-6 h-6 text-gray-400" />}
                        link=""
                        borderColor="hover:border-gray-400/50"
                    />
                </div> */}
            </div>
        </motion.div>
    );
};

export default Talk;
