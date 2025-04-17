import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg from '../assets/images/heroimg.webp'; // Relative import from assets
import logo from '../assets/images/logo.jpg'; // Relative import from assets
import pdf from '../assets/images/Ankit_Yadav_newResumes.pdf'
// Typing effect component
const TypewriterText = ({ text, delay, onComplete, showCursor }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            } else if (onComplete) {
                onComplete(); // Trigger next text after completion
            }
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
    }, [index, text, onComplete]);

    return (
        <motion.p className="text-white text-2xl font-semibold flex headline-1 ">
            {displayedText}
            {showCursor && (
                <motion.span
                    className="ml-1 w-1 h-6 bg-blue-500 inline-block "
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                />
            )}
        </motion.p>
    );
};

const Hero = () => {

    const [showName, setShowName] = useState(false);
    const [showRole, setShowRole] = useState(false);
    const [showCursor, setShowCursor] = useState(false);

    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    {/* Availability Status */}
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src={logo}
                                width={40}
                                height={40}
                                alt="Ankit Yadav portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    {/* Typing Animation */}

                    {/* Typing Animation */}
                    <div className="text-left headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        {/* "Hi," types first */}
                        <TypewriterText text="Hi," delay={0} onComplete={() => setShowName(true)} />

                        {/* After "Hi," completes, "I'm Ankit Yadav" types */}
                        {showName && <TypewriterText text="I'm Ankit Yadav," delay={500} onComplete={() => setShowRole(true)} />}

                        {/* After "I'm Ankit Yadav," completes, "MERN Stack Developer" types */}
                        {showRole && <TypewriterText text="MERN Stack Developer" delay={1000} onComplete={() => setShowCursor(true)} />}
                    </div>


                    {/* Buttons & Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href={pdf}
                            download="Ankit_CV"
                            className="ms-2 contact-btn bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-all text-sm sm:text-base whitespace-nowrap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                            </svg>
                            <span className="truncate">Download CV</span>
                        </a>


                        <div className="flex gap-4 ms-3">
                            {[
                                {
                                    href: "https://github.com/ankityadav456",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    ),
                                },
                                {
                                    href: "https://www.linkedin.com/in/ankit-yadav-y2302",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect width="4" height="12" x="2" y="9"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    ),
                                },
                                {
                                    href: "mailto:ankityadav_45@outlook.com",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    ),
                                },
                            ].map(({ href, icon }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Section with Hover Effect */}
                <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 ms-2">
                    <figure className="w-[320px] h-[350px] sm:w-[360px] sm:h-[400px] md:h-[400px] md:w-[420px] lg:w-[480px] lg:h-[480px] bg-gradient-to-t from-blue-400/40 via-25% via-blue-300/40 to-70% to-transparent rounded-[60px] overflow-hidden shadow-lg dark:shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl">
                        <img
                            src={heroImg}
                            alt="Ankit Yadav"
                            className="w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                    </figure>
                </div>


            </div>
        </section>
    );
};

export default Hero;
