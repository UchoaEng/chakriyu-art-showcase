import { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface MotionRevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  distance?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

const MotionReveal = ({ children, className, delay = 0, distance = 34 }: MotionRevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: distance, filter: "blur(5px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.16, margin: "0px 0px -72px" }}
    transition={{ duration: 0.86, delay, ease }}
  >
    {children}
  </motion.div>
);

export default MotionReveal;
