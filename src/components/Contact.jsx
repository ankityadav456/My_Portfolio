import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import MapModal from "./MapModal";
import { useState } from "react";
import { MapPin } from "lucide-react";
const Contact = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative section mt-10 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[160px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-start mb-10"
        >
          <h2 className="text-4xl font-semibold text-text">
            Contact me for collaboration
          </h2>
          <p className="mt-2 text-muted-foreground mx-auto">
            Have an idea, a project, or just want to say hello?
            I’d love to hear from you.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-7xl mx-auto
            grid lg:grid-cols-2
            gap-10
            rounded-3xl
            bg-white/70 dark:bg-[#121212]/60
            backdrop-blur-2xl
            border border-black/5 dark:border-white/10
            p-8 md:p-12
          "
        >
          {/* LEFT INFO */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-text">
                Get in touch
              </h3>
              <p className="mt-3 text-muted-foreground">
                I’m currently open for freelance work, collaborations,
                and full-time opportunities.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <span className="text-text font-medium">
                  ankityadav.dev@gmail.com
                </span>
              </div>
               <button
  onClick={() => setMapOpen(true)}
  className="
    mt-6 inline-flex items-center gap-2
    px-4 py-2 rounded-xl
    bg-white/70 dark:bg-white/10
    backdrop-blur-md
    border border-black/10 dark:border-white/20
    text-text font-medium
    shadow-sm
    transition-all duration-300
    hover:bg-white/90 dark:hover:bg-white/20
    hover:shadow-md hover:-translate-y-[1px]
    active:scale-95
  "
>
  <MapPin size={18} className="text-primary" />
  <span>View Location</span>
</button>
            </div>
           

            {/* Social icons */}
            <div className="mt-10 flex gap-4">
              {["GitHub", "LinkedIn", "Instagram"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }} title={item}
                  className="
                    w-12 h-12 rounded-xl
                    grid place-items-center
                    bg-white/60 dark:bg-white/10
                    border border-black/10 dark:border-white/10
                    cursor-pointer
                    transition
                  "
                >
                  <span className="text-sm font-medium text-text">
                    {item[0]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>


          {/* RIGHT FORM */}
          <form
            action="https://getform.io/f/bxowedoa"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="text-sm text-muted-foreground">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ankit Yadav"
                className="
                  mt-2 w-full rounded-xl px-4 py-3
                  bg-white/80 dark:bg-black/40
                  border border-black/10 dark:border-white/10
                  text-text
                  focus:ring-2 focus:ring-primary outline-none
                "
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="
                  mt-2 w-full rounded-xl px-4 py-3
                  bg-white/80 dark:bg-black/40
                  border border-black/10 dark:border-white/10
                  text-text
                  focus:ring-2 focus:ring-primary outline-none
                "
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Tell me about your project..."
                className="
                  mt-2 w-full rounded-xl px-4 py-3
                  bg-white/80 dark:bg-black/40
                  border border-black/10 dark:border-white/10
                  text-text resize-none
                  focus:ring-2 focus:ring-primary outline-none
                "
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-full flex items-center justify-center gap-2
                py-3 rounded-xl
                bg-primary text-white
                font-semibold
                shadow-lg
              "
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
      <MapModal open={mapOpen} onClose={() => setMapOpen(false)} />

    </section>
  );
};

export default Contact;
