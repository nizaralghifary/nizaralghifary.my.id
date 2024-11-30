"use client";

import { motion } from "motion/react";
import { BadgeDollarSign, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <footer className="py-8 text-black dark:text-white bg-background">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.a
              href="https://instagram.com/nyzr.al"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-black transition-transform transform hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Instagram className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://github.com/nizaralghifary"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-black transition-transform transform hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://www.nizaralghifary.my.id/supportme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white dark:bg-black transition-transform transform hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <BadgeDollarSign className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </>
  );
};