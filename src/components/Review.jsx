"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Product Manager",
    message:
      "Ankit is extremely detail-oriented. His MERN skills and UI sense helped us ship faster with better quality.",
  },
  {
    name: "Neha Verma",
    role: "Startup Founder",
    message:
      "Working with Ankit was smooth and professional. He understands both design and development deeply.",
  },
  {
    name: "Amit Patel",
    role: "Senior Developer",
    message:
      "Clean code, modern UI, and great communication. Ankit consistently delivers beyond expectations.",
  },
];

// duplicate reviews for infinite loop
const infiniteReviews = [...reviews, ...reviews];

const Reviews = () => {
  const controls = useAnimation();

  /* ================================
        START INFINITE ANIMATION
  =================================*/
  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 18,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  /* ================================
        PAUSE / RESUME
  =================================*/
  const pause = () => controls.stop(); // freeze current position

  const play = () =>
    controls.start({
      x: "-50%",
      transition: {
        duration: 18,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

  return (
    <section id="reviews" className="relative pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] bg-primary/20 blur-[160px] rounded-full" />

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-text">
          Reviews & Feedback
        </h2>

        <p className="text-muted-foreground mt-3">
          What people say about working with me
        </p>
      </div>

      {/* Edge Fade Effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-20" />

      {/* ================================
              INFINITE ROW
      =================================*/}
      <motion.div
        className="flex gap-8 w-max cursor-pointer"
        animate={controls}
        style={{ willChange: "transform" }}
        onMouseEnter={pause}
        onMouseLeave={play}
      >
        {infiniteReviews.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              rotateX: 6,
              rotateY: -6,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              group relative
              min-w-[340px]
              max-w-[340px]
              rounded-3xl
              p-7
              bg-white/60 dark:bg-[#121212]/70
              backdrop-blur-xl
              border border-black/5 dark:border-white/10
              shadow-lg hover:shadow-2xl
              transition-all duration-500
            "
          >
            {/* Glow */}
            <span
              className="
                absolute inset-0
                rounded-3xl
                bg-primary/20
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition duration-500
              "
            />

            {/* Quote */}
            <Quote className="w-9 h-9 text-primary/70 mb-4" />

            {/* Message */}
            <p className="text-sm leading-relaxed text-text">
              “{item.message}”
            </p>

            {/* Stars */}
            <div className="flex gap-1 mt-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
            </div>

            {/* User */}
            <div className="flex items-center gap-3 mt-6">
              <div
                className="
                w-11 h-11 rounded-full
                flex items-center justify-center
                bg-primary/20 text-primary font-semibold
              "
              >
                {item.name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-semibold text-text">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;