import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MapModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed z-[9999] inset-0
              flex items-center justify-center
              px-4
            "
          >
            <div
              className="
                relative w-full max-w-3xl
                rounded-3xl overflow-hidden
                bg-white/80 dark:bg-[#121212]/80
                backdrop-blur-2xl
                border border-black/10 dark:border-white/10
                shadow-2xl
              "
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="
                  absolute top-4 right-4
                  w-10 h-10 rounded-full
                  bg-white/60 dark:bg-white/10
                  grid place-items-center
                  hover:scale-110 transition
                "
              >
                <X />
              </button>

              {/* Map */}
              <iframe
                title="India Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4032675.3784085556!2d77.4126155!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2724ff18a9%3A0x4214383eeda9b56!2sIndia!5e0!3m2!1sen!2sin!4v1707589200000"
                className="w-full h-[60vh] border-none"
                loading="lazy"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MapModal;
