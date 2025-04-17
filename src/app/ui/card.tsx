import { ReactNode } from "react";
import { motion } from "framer-motion";

type CardProps = {
  children: ReactNode;
  className?: string;
  whileHover?: Record<string, any>;
};

export default function Card({
  children,
  className = "",
  whileHover,
}: CardProps) {
  return (
    <motion.div
      whileHover={whileHover}
      className={`rounded-md shadow-md bg-white ${className}`}
    >
      {children}
    </motion.div>
  );
}
