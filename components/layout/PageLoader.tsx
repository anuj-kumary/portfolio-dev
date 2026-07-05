"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-[#0B0B0C] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <span className="text-2xl font-semibold tracking-tight text-[#FAFAFA]">
              AK<span className="text-[#4F8CFF]">.</span>
            </span>
            <div className="mt-4 flex justify-center">
              <motion.div
                className="w-16 h-[2px] bg-[#222] rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-[#4F8CFF]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
