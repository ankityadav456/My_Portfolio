"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Engineering Manager",
    company: "FinTech Scaleup",
    message:
      "Ankit's technical mastery over full-stack architectures and React state management helped our team shave weeks off our product milestone. Highly dependable senior engineer.",
  },
  {
    name: "Neha Verma",
    role: "Startup Founder & CEO",
    company: "QuickCommerce",
    message:
      "Working with Ankit was an absolute pleasure. He doesn't just write code; he thinks deeply about product architecture, UX micro-interactions, and backend scalability.",
  },
  {
    name: "Amit Patel",
    role: "Lead Architect",
    company: "Cloud Solutions Inc.",
    message:
      "Exceptional eye for performance optimization. His clean code structure, attention to accessibility, and API resilience stand out. A true senior developer caliber.",
  },
  {
    name: "Siddharth Mehta",
    role: "Product Director",
    company: "OmniChannel Hub",
    message:
      "Ankit elevated our entire web platform. From GSAP animations to rock-solid MongoDB schemas, everything was delivered on schedule with 100% polish.",
  },
];

const duplicatedReviews = [...reviews, ...reviews];

const Review = () => {
  return (
    <section id="reviews" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-12 select-none">
        {/* Architectural Background Watermark */}
        <div
          aria-hidden="true"
          className="absolute -top-6 sm:-top-9 left-1/2 -translate-x-1/2 font-heading font-black tracking-widest uppercase text-6xl sm:text-7xl md:text-8xl select-none pointer-events-none section-watermark whitespace-nowrap z-0"
        >
          REVIEWS
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/10 text-primary border border-orange-500/20 mb-2.5 shadow-2xs">
            <MessageSquareQuote size={13} className="text-primary" />
            <span>05 // TESTIMONIALS</span>
          </div>

          {/* Clear, Recognizable Section Title */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-2.5">
            Client &amp; Team <span className="text-primary">Reviews</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Honest feedback and endorsements from engineering managers, startup founders, and teammates.
          </p>
        </div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* EDGE FADES */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-background to-transparent z-20" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 32,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-4 sm:gap-6 w-max cursor-pointer hover:[animation-play-state:paused]"
        >
          {duplicatedReviews.map((item, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[360px] rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* RATING STARS */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                </div>

                {/* QUOTE TEXT */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  "{item.message}"
                </p>
              </div>

              {/* AUTHOR */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold font-heading flex items-center justify-center shadow-sm text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.role} • <span className="text-slate-700 dark:text-slate-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
