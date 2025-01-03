import "../globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import "react-tippy/dist/tippy.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Footer from "@/components/Footer";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        void new Audio("/pop.mp3").play().catch(() => null);
    }, [router.pathname]);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Sai Gonuguntla</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="keywords" content="sai, Sai Gonuguntla" />
                <meta name="description" content="Sai Gonuguntla - Software Engineer" />
                <meta name="author" content="Sai Gonuguntla" />
            </Head>

            <div className="relative text-black dark:text-white flex flex-row justify-center w-full h-full dark:from-black dark:to-[#292524] min-h-screen">
                {/* Stars Background */}
                <StarsBackground
                    starDensity={0.001}
                    allStarsTwinkle={true}
                    twinkleProbability={0.7}
                    minTwinkleSpeed={0.5}
                    maxTwinkleSpeed={1}
                    className="absolute inset-0 z-0"
                />
                {/* Shooting Stars Background */}
                <ShootingStars
                    minSpeed={10}
                    maxSpeed={30}
                    minDelay={1200}
                    maxDelay={4200}
                    starColor="#FFFFFF"
                    trailColor="#FFFFFF"
                    starWidth={10}
                    starHeight={1}
                    className="absolute inset-0 z-10"
                />

                {/* Navigation */}
                <Nav />

                {/* Main Content */}
                <div className="w-[80%] md:w-[45rem] relative z-30">
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.pathname} />
                    </AnimatePresence>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default MyApp;
