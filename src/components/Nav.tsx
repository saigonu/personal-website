import { AnimatePresence, motion } from "framer-motion";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
import { classNames } from "../util/classNames";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const LandingButton = ({ name, link, selected }: { name: string; link: string; selected: boolean }) => {
    return (
        <Link href={link}>
            <motion.a
                className={classNames(
                    selected
                        ? "bg-white/10 dark:bg-black/10 dark:text-white"
                        : "bg-292523 text-white/50 hover:bg-gray-700/5 hover:text-white dark:hover:bg-black/5 dark:hover:text-white",
                    "cursor-pointer px-4 py-2 text-base rounded-md transition-all duration-75"
                )}
                whileHover={{ rotate: 2 }} 
                transition={{ type: "spring", stiffness: 500 }}
            >
                {name}
            </motion.a>
        </Link>
    );
};

const MobileLandingButton = ({
    name,
    link,
    selected,
    onClick,
}: {
    name: string;
    link: string;
    selected: boolean;
    onClick: () => void;
}) => {
    return (
        <Link href={link}>
            <motion.a
                className={classNames(
                    selected ? "bg-black/10 dark:bg-black/10" : "bg-transparent dark:text-white",
                    "flex flex-grow justify-center dark:text-white cursor-pointer w-auto py-4 text-black/80 dark:black/10 transition-all duration-75"
                )}
                onClick={onClick}
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {name}
            </motion.a>
        </Link>
    );
};

const LinkButton = ({ title, icon, href }: any) => {
    return (
            <motion.a
                target="_blank"
                rel="noreferrer"
                href={href}
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {icon}
            </motion.a>
    );
};

const Nav = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((old) => !old);
    };

    return (
        <>
            <motion.div className="hidden z-[999] fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[50rem] xs:flex flex-row justify-between items-center text-white px-4 py-4 md:py-6 rounded-md bg-[#2e1065]">
                <div className="flex flex-row items-center justify-between gap-2">
                    <LandingButton name="Home" link="/" selected={router.pathname === "/"} />
                    <LandingButton name="About" link="/about" selected={router.pathname === "/about"} />
                    <LandingButton name="Projects" link="/projects" selected={router.pathname === "/projects"} />
                </div>

                <div className="flex flex-row items-center justify-center gap-2 xs:gap-4">
                    <LinkButton
                        title="GitHub"
                        href={"https://github.com/saigonu"}
                        icon={<SiGithub className="w-6 h-6 cursor-pointer hover:fill-white fill-gray-400 transition-colors" />}
                    />

                    <LinkButton
                        title="LinkedIn"
                        href={"https://linkedin.com/in/saigonuguntla"}
                        icon={<SiLinkedin className="w-6 h-6 cursor-pointer hover:fill-white fill-gray-400 transition-colors" />}
                    />
                </div>
            </motion.div>

            <motion.div className="xs:hidden z-[990] fixed w-full text-white flex flex-row justify-between items-center px-4 py-3 bg-white/0 dark:bg-[#2e1065]/0">
                <div className="flex flex-row items-center justify-between gap-2"></div>

                <div className="flex flex-row text-white items-center justify-center">
                    <button onClick={toggleMenu} className="h-9 w-9 flex items-center text-white justify-center">
                        {!mobileMenuOpen ? <HiMenu className="w-7 h-7" /> : <HiX className="w-7 h-7" />}
                    </button>
                </div>
            </motion.div>

            <AnimatePresence exitBeforeEnter>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            key="NavBackdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="z-[500] fixed text-white w-full h-screen overflow-hidden backdrop-blur-lg bg-black/0 flex flex-col items-center justify-content"
                        />

                        <motion.div
                            key="NavMenu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="flex flex-col items-center justify-start mt-16 fixed w-full h-auto z-[700] bg-white dark:bg-[#2e1065] border-x border-b text-white border-slate-800/10"
                        >
                            <div className="flex flex-row w-full text-white justify-evenly">
                                <MobileLandingButton
                                    name="Home"
                                    link="/"
                                    selected={router.pathname === "/"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="About"
                                    link="/about"
                                    selected={router.pathname === "/about"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Projects"
                                    link="/projects"
                                    selected={router.pathname === "/projects"}
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>

                            <div className="flex flex-row items-center justify-center gap-6 py-4">
                                <LinkButton
                                    href={"https://github.com/saigonu"}
                                    icon={<SiGithub className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://linkedin.com/in/saigonuguntla"}
                                    icon={<SiLinkedin className="w-6 h-6 cursor-pointer" />}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
