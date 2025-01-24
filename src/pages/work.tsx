import React from "react";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div className="mt-36 w-full">
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-12">Work</h1>

            <h2 className="font-medium text-3xl mb-12">I.</h2>

            <h3 className="font-medium text-xl mb-12">Work Experience</h3>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                I have gained valuable experience as a Software Engineer through internships at Bluebeam, Truckpedia,
                and Alameda County. At Bluebeam, I focused on enhancing observability and monitoring, gaining insight
                into system performance and reliability. At Truckpedia, I contributed to mobile application development,
                creating intuitive and functional user experiences. At Alameda County, I worked on full-stack web
                development, building robust and user-friendly web solutions.
            </p>

            <h2 className="font-medium text-3xl mb-12">II.</h2>

            <h3 className="font-medium text-xl mb-12">Research</h3>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                During my undergraduate research in machine learning, I developed a neural network to predict the
                biophysical properties of neurons from their electronic response patterns. Initially, it was a
                Convolutional Neural Neawork (CNN) but I developed it to a Long Short-Term Memory (LSTM) architecture
                after identifying the strong temporal dependencies in the data.
            </p>
        </div>
    );
};

export default Work;
