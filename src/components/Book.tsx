import { motion } from "framer-motion";

const Book = () => {
  return (
    <motion.img
      src="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
      alt="Book Cover"
      className="w-[400px] md:w-[380px] rounded-2xl shadow-2xl shadow-black/60"
      animate={{
        rotateY: [0, 20, -20, 0],
        rotateX: [0, 8, -8, 0],
        scale: [1, 1.05, 1.02, 1],
        rotate: [0, -2, 2, 0], // subtle bend
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1, rotateY: 0, rotateX: 0 }}
    />
  );
};

export default Book;
