"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <motion.div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left flex flex-col md:flex-row gap-8 items-center justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s create something amazing together
            </h2>
            <p className="text-sm md:text-base mt-2">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:krishna462003@gmail.com"
              className="bg-gray-900 text-white w-max px-6 h-12 rounded-xl inline-flex items-center gap-2 font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              <span className="text-sm">Email Me</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href="tel:+919360867413"
              className="bg-gray-900 text-white w-max px-6 h-12 rounded-xl inline-flex items-center gap-2 font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              <span className="text-sm">+91 9360867413</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
