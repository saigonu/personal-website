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
                development, building robust and user-friendly web solutions. For more details about my specific
                contributions and achievements, please reach out for my resume.
            </p>

            <h2 className="font-medium text-3xl mb-12">II.</h2>

            <h3 className="font-medium text-xl mb-12">Research</h3>

            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                In addition to my professional experience, I have engaged in undergraduate research in machine learning,
                where I engineered a Convolutional Neural Network (CNN) using Python and PyTorch. This model predicting
                biophysical properties of neurons based on their electronic responses. By focusing on iterative
                hyperparameter tuning, I was able to optimize algorithms and reduce model training time.
            </p>
        </div>
    );
};

export default Work;
