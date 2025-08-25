"use client";

import { motion } from "framer-motion";

export const BackgroundEffect = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at top left, #4f46e5 0%, transparent 70%)",
        height: "100%",
        width: "100%",
        pointerEvents: "none", 
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    />
  );
};
