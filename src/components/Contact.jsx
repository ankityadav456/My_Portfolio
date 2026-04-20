import { motion } from "framer-motion";
import { Mail, Send, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import MapModal from "./MapModal";
import { useState } from "react";

const Contact = () => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative pb-24 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="container mx-auto px-4">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold text-text">
            Let's Work Together
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have an idea or opportunity? I'm always open to discussing
            creative projects, collaborations and full-time roles.
          </p>
        </motion.div>

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-7xl mx-auto
            grid lg:grid-cols-2 gap-14
            rounded-[32px]
            bg-white/60 dark:bg-[#121212]/70
            backdrop-blur-3xl
            border border-black/5 dark:border-white/10
            p-10 md:p-14
            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-semibold text-text">
                Get in touch
              </h3>

              <p className="mt-3 text-muted-foreground">
                Available for freelance, startup collaboration,
                and product development opportunities.
              </p>

              {/* EMAIL */}
              <div className="flex items-center gap-4 mt-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Mail />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>
                  <p className="font-medium text-text">
                    ankit.y.2302@gmail.com
                  </p>
                </div>
              </div>

              {/* MAP BUTTON */}
              <button
                onClick={() => setMapOpen(true)}
               className="
                mt-8 inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                bg-primary text-white font-medium
                hover:shadow-lg hover:-translate-y-[1px]
                transition-all
              "
              >
                <MapPin size={18} />
                View Location
              </button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-14">
              {[Github, Linkedin, Instagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.1 }}
                  className="
                    w-12 h-12 rounded-xl
                    grid place-items-center
                    bg-white/70 dark:bg-white/10
                    border border-black/10 dark:border-white/10
                    cursor-pointer
                    transition
                    hover:bg-primary/20
                  "
                >
                  <Icon size={18} className="text-text" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= FORM ================= */}
          <form
            action="https://getform.io/f/bxowedoa"
            method="POST"
            className="space-y-7"
          >
            {["Name", "Email"].map((item, i) => (
              <div key={i}>
                <label className="text-sm text-muted-foreground">
                  Your {item}
                </label>

                <input
                  required
                  name={item.toLowerCase()}
                  type={item === "Email" ? "email" : "text"}
                  placeholder={`Enter your ${item}`}
                  className="
                    mt-2 w-full rounded-xl px-5 py-3
                    bg-white/80 dark:bg-black/40
                    border border-black/10 dark:border-white/10
                    text-text
                    transition-all duration-300
                    focus:ring-2 focus:ring-primary
                    focus:shadow-lg
                    focus:scale-[1.02]
                    outline-none
                  "
                />
              </div>
            ))}

            <div>
              <label className="text-sm text-muted-foreground">
                Message
              </label>

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project..."
                className="
                  mt-2 w-full rounded-xl px-5 py-3
                  bg-white/80 dark:bg-black/40
                  border border-black/10 dark:border-white/10
                  text-text resize-none
                  transition-all duration-300
                  focus:ring-2 focus:ring-primary
                  focus:shadow-lg
                  focus:scale-[1.02]
                  outline-none
                "
              />
            </div>

            {/* SEND BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            
              className="
                w-full flex items-center justify-center gap-2
                py-4 rounded-xl
                bg-primary text-white font-medium
                hover:shadow-lg hover:-translate-y-[1px]
                transition-all
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