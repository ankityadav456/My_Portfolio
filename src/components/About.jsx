"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const aboutItems = [
    {
        label: 'Projects Done',
        number: 10
    },
    {
        label: 'Years of Experience',
        number: 1.5
    }
];

const typingText = "Welcome! Hi, I'm Ankit, a passionate Frontend MERN Stack Developer with 1.5+ years of experience in JavaScript, HTML, and CSS. I’ve had the opportunity to develop a self-project using ReactJS, Node.js, Express, and MongoDB, which has enhanced my skills in both frontend and backend development."

const About = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < typingText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + typingText[index]);
                setIndex(index + 1);
            }, 30); // Adjust speed here

            return () => clearTimeout(timeout);
        }
    }, [index]);
    <p className="text-zinc-700 dark:text-zinc-300 mb-4 md:mb-8">
    
</p>

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-100 dark:bg-zinc-900/50 p-7 rounded-2xl md:p-12 reveal-up">
                    
                    {/* Typing Animation */}
                    <motion.p 
                        className="text-zinc-700 dark:text-zinc-300 mb-4 md:mb-8 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {displayedText}
                        <span className="animate-blink">|</span> {/* Cursor effect */}
                    </motion.p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl text-zinc-900 dark:text-zinc-100">{number}</span>
                                    <span className="text-purple-500 dark:text-purple-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{label}</p>
                            </div>
                        ))}
                        <figure className="img-box w-9 h-9 rounded-lg ml-auto">
                            <img
                                src="/images/logo.jpg"
                                width={40}
                                height={40}
                                alt="Ankit Yadav portrait"
                                className="img-cover ml-auto"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
