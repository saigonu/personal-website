import { motion } from "framer-motion";
import Image from 'next/image';
import Status from "../components/Status";

const Index = () => {

  return (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: 'easeOut', duration: 0.15 }}
        className="mt-36 w-full text-center"
    >
        <motion.div
            whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2, zIndex: 1 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            transition={{ ease: 'easeOut', duration: 0.90 }}
        >
        </motion.div>
        <h1 className="mt-24 font-bold text-4xl md:text-5xl mb-12 text-left">Sai Gonuguntla</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12 text-left"> 
        Software was envisioned to embody be light and easy for usage. However, as we forge ahead with the rapid development of new products, the burden of bloated code is beginning to take its toll. I am <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="font-bold underline underline-offset-2 decoration-2 hover:no-underline decoration-sky-500">never going to give up</a> on creating simple but effective, highly-scalable and real-time products for the future.
        </p>
        <div className="mt-12 text-gray-700 dark:text-gray-400 text-xl italic">
        </div>
        <Status/>
    </motion.div>
  );
};

export default Index;
