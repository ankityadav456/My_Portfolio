import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImg from '../assets/images/profile_img.png';

const reviews = [
  {
    name: "John Doe",
    review: "Ankit is a fantastic developer! Highly skilled and great to work with.",
    image: profileImg,
    role: "Senior Developer",
  },
  {
    name: "Emily Smith",
    review: "Loved collaborating with Ankit. His skills in MERN Stack are amazing!",
    image: profileImg,
    role: "Project Manager",
  },
  {
    name: "Michael Brown",
    review: "A talented and detail-oriented developer. Would love to work again!",
    image: profileImg,
    role: "Tech Lead",
  },
  {
    name: "Sophia White",
    review: "Ankit is extremely creative and delivers high-quality projects on time.",
    image: profileImg,
    role: "UI/UX Designer",
  },
  {
    name: "Michael Brown",
    review: "A talented and detail-oriented developer. Would love to work again!",
    image: profileImg,
    role: "Tech Lead",
  },
  {
    name: "Sophia White",
    review: "Ankit is extremely creative and delivers high-quality projects on time.",
    image: profileImg,
    role: "UI/UX Designer",
  },
];


const ReviewSection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Translate vertical scroll into horizontal movement
  const xScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={scrollRef} id="reviews" className="py-16 relative bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-start text-zinc-900 dark:text-zinc-100 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What People Say About Me
        </motion.h2>

        {/* Scrollable Review Cards */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            style={{ x: xScroll }} // Moves horizontally as user scrolls down
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] snap-start p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">{review.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{review.role}</p>
                <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300">{review.review}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
