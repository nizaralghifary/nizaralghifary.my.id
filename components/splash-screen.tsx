"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
})

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isSplashVisible ? (
          <motion.div
            key="splash"
            className={`${poppins.className} fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl font-bold text-black dark:text-white whitespace-nowrap"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block overflow-hidden border-r-4 border-r-black dark:border-r-white pr-5"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.5 }}
              >
                Nizar
              </motion.span>
            </motion.h1>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!isSplashVisible && children}
    </>
  );
}