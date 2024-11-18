/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const Title = ({ title, description = "description" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-10"
    >
      <h1 className="text-4xl uppercase">{title}</h1>
      <p>{description}</p>
    </motion.div>
  );
};

export default Title;
