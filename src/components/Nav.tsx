import { AnimatePresence, motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../util/classNames";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BiSolidEnvelope } from "react-icons/bi";

const LandingButton = ({ name, link, selected }: { name: string; link: string; selected: boolean }) => {
    const isExternal = link.startsWith("http");

    if (isExternal) {
        return (
            <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                    selected
                        ? "bg-white/10 dark:bg-black/10 dark:text-white"
                        : "bg-292523 text-white/50 hover:bg-gray-700/5 hover:text-white dark:hover:bg-black/5 dark:hover:text-white",
                    "cursor-pointer px-4 py-2 text-base rounded-md transition-all duration-75"
                )}
            >
                {name}
            </motion.a>
        );
    }
    return (
        <Link href={link} passHref>
            <motion.a
                className={classNames(
                    selected
                        ? "bg-white/10 dark:bg-black/10 dark:text-white"
                        : "bg-292523 text-white/50 hover:bg-gray-700/5 hover:text-white dark:hover:bg-black/5 dark:hover:text-white",
                    "cursor-pointer px-4 py-2 text-base rounded-md transition-all duration-75"
                )}
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
    const isExternal = link.startsWith("http");

    if (isExternal) {
        return (
            <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                    selected ? "bg-black/10 dark:bg-black/10" : "bg-transparent dark:text-white",
                    "flex flex-grow justify-center dark:text-white cursor-pointer w-auto py-4 text-black/80 dark:black/10 transition-all duration-75"
                )}
                onClick={onClick}
            >
                {name}
            </motion.a>
        );
    }

    return (
        <Link href={link}>
            <motion.a
                className={classNames(
                    selected ? "bg-black/10 dark:bg-black/10" : "bg-transparent dark:text-white",
                    "flex flex-grow justify-center dark:text-white cursor-pointer w-auto py-4 text-black/80 dark:black/10 transition-all duration-75"
                )}
                onClick={onClick}
            >
                {name}
            </motion.a>
        </Link>
    );
};

const LinkButton = ({ title, icon, href }: any) => {
    return (
        <motion.a target="_blank" rel="noreferrer" href={href}>
            {icon}
        </motion.a>
    );
};

const Nav = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(old => !old);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setMenuOpen(false);
        }
    }, [isMobile]);

    return (
        <>
            <motion.div
                className={classNames(
                    "hidden z-[999] fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[50rem] xs:flex flex-row justify-between items-center text-white px-4 py-4 md:py-6 rounded-md bg-[#0d0d0d] transition-all",
                    scrollY > 50 ? "backdrop-blur-md bg-white/30 dark:bg-[#0d0d0d]/75" : "bg-transparent"
                )}
            >
                <div className="flex flex-row items-center justify-between gap-2">
                    <LandingButton name="Home" link="/" selected={router.pathname === "/"} />
                    <LandingButton name="About" link="/about" selected={router.pathname === "/about"} />
                    <LandingButton name="Work" link="/work" selected={router.pathname === "/work"} />
                    <LandingButton name="Projects" link="/projects" selected={router.pathname === "/projects"} />
                    <LandingButton name="Tech" link="/tech" selected={router.pathname === "/tech"} />
                    <LandingButton name="Blog" link="https://saig-blog.vercel.app/" selected={false} />
                </div>

                <div className="flex flex-row items-center justify-center gap-2 xs:gap-4">
                    <LinkButton
                        title="GitHub"
                        href={"https://github.com/saigonu"}
                        icon={
                            <SiGithub className="w-6 h-6 cursor-pointer hover:fill-white fill-gray-400 transition-colors" />
                        }
                    />
                    <LinkButton
                        title="LinkedIn"
                        href={"https://linkedin.com/in/saigonuguntla"}
                        icon={
                            <SiLinkedin className="w-6 h-6 cursor-pointer hover:fill-white fill-gray-400 transition-colors" />
                        }
                    />
                    <LinkButton
                        href={"mailto:hi@saigonuguntla.tech"}
                        icon={
                            <BiSolidEnvelope className="w-7 h-8 cursor-pointer hover:fill-white fill-gray-400 transition-colors" />
                        }
                    />
                </div>
            </motion.div>

            <motion.div className="xs:hidden z-[990] fixed w-full text-white flex flex-row justify-between items-center px-4 py-3 bg-white/0 dark:bg-[#0d0d0d]/0">
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
                            className="flex flex-col items-center justify-start mt-16 fixed w-full h-auto z-[700] bg-white dark:bg-[#0d0d0d] border-x border-b text-white border-slate-800/10"
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
                                    name="Work"
                                    link="/work"
                                    selected={router.pathname === "/work"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Projects"
                                    link="/projects"
                                    selected={router.pathname === "/projects"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Tech"
                                    link="/tech"
                                    selected={router.pathname === "/tech"}
                                    onClick={() => setMenuOpen(false)}
                                />
                                <MobileLandingButton
                                    name="Blog"
                                    link="https://saig-blog.vercel.app/"
                                    selected={false}
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-row items-center justify-center gap-6 py-4 mt-4">
                                <LinkButton
                                    href={"https://github.com/saigonu"}
                                    icon={<SiGithub className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"https://linkedin.com/in/saigonuguntla"}
                                    icon={<SiLinkedin className="w-6 h-6 cursor-pointer" />}
                                />
                                <LinkButton
                                    href={"mailto:hi@saigonuguntla.tech"}
                                    icon={<BiSolidEnvelope className="w-6 h-6 cursor-pointer" />}
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
