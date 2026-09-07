"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin, Github, Linkedin, Copy, Check, Sparkles, MessageSquare, Phone } from "lucide-react";
import MapModal from "./MapModal";

const Contact = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailAddress = "ankit.y.2302@gmail.com";
  const phoneNumber = "+91 9137580969";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-14 select-none">
          {/* Architectural Background Watermark */}
          <div
            aria-hidden="true"
            className="absolute -top-6 sm:-top-9 left-1/2 -translate-x-1/2 font-heading font-black tracking-widest uppercase text-6xl sm:text-7xl md:text-8xl select-none pointer-events-none section-watermark whitespace-nowrap z-0"
          >
            CONTACT
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-500/10 text-primary border border-orange-500/20 mb-2.5 shadow-2xs">
              <Mail size={13} className="text-primary" />
              <span>06 // GET IN TOUCH</span>
            </div>

            {/* Clear, Recognizable Section Title */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-2.5">
              Contact <span className="text-primary">Me</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Have an open role, freelance project, or collaboration idea? Let's connect and build together.
            </p>
          </div>
        </div>

        {/* MAIN CONTACT CARD */}
        <div className="bg-white dark:bg-[#0f172a]/80 rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-sm grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 sm:space-y-7">
            <div>
              {/* STATUS PILL */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Full-Time Roles & Projects</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-1.5">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                Feel free to reach out via email, phone, or LinkedIn. I typically respond within 24 hours.
              </p>

              {/* DIRECT ACTION CARDS */}
              <div className="space-y-3">
                
                {/* 1-CLICK COPY EMAIL CARD */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-3 group hover:border-slate-300 dark:hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Email</p>
                      <a href={`mailto:${emailAddress}`} className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono truncate block hover:underline">{emailAddress}</a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm active:scale-95 shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* PHONE CARD */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-3 group hover:border-slate-300 dark:hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Phone / WhatsApp</p>
                      <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono truncate block hover:underline">{phoneNumber}</a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm active:scale-95 shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* LOCATION CARD */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Location</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">Mumbai, India – 400015</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMapOpen(true)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 transition-all shrink-0"
                  >
                    Map
                  </button>
                </div>

              </div>
            </div>

            {/* SOCIAL PROFILES */}
            <div className="pt-4 border-t border-slate-100 dark:border-white/5">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                Profiles & Links
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  {
                    href: "https://github.com/ankityadav456",
                    icon: <Github size={15} />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/ankit-yadav",
                    icon: <Linkedin size={15} />,
                    label: "LinkedIn",
                  },
                  {
                    href: `mailto:${emailAddress}`,
                    icon: <Mail size={15} />,
                    label: "Email",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium hover:border-slate-400 dark:hover:border-white/30 transition-all shadow-sm"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-white/10">
            <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white mb-1">
              Send a message
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
              Leave a note below and I will get back to you soon.
            </p>

            <form
              action="https://getform.io/f/bxowedoa"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-xl px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm transition-all focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    className="w-full rounded-xl px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm transition-all focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Frontend Role / Project Consultation / Hello"
                  className="w-full rounded-xl px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm transition-all focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me a bit about your project, timeline, or position details..."
                  className="w-full rounded-xl px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm transition-all focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none resize-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Send Message</span>
                <Send size={15} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* MAP MODAL */}
      <MapModal open={mapOpen} onClose={() => setMapOpen(false)} />

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {(copiedEmail || copiedPhone) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-2xl flex items-center gap-2 text-xs font-semibold"
          >
            <Check size={16} className="text-emerald-500" />
            <span>{copiedEmail ? "Email copied to clipboard!" : "Phone number copied to clipboard!"}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
