import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
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

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative section mt-10 overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-start"
        >
          <h2 className="text-4xl font-semibold text-text">
            What People Say About Me
          </h2>
          <p className="mt-3 text-muted-foreground mx-auto">
            Feedback from people I’ve worked with professionally
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="
                relative group
                rounded-2xl
                p-6
                bg-white/80 dark:bg-[#121212]/60
                backdrop-blur-xl
                border border-black/5 dark:border-white/10
                shadow-lg hover:shadow-2xl
                transition-all duration-500
              "
            >
              {/* Glow */}
              <span className="
                absolute inset-0
                rounded-2xl
                bg-primary/20
                blur-2xl
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
              " />

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/60 mb-4" />

              {/* Message */}
              <p className="text-sm text-text leading-relaxed">
                “{item.message}”
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar (initial-based) */}
                <div className="
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  bg-primary/20 text-primary
                  font-semibold
                ">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-medium text-text">
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
      </div>
    </section>
  );
};

export default Testimonials;
