"use  client";

import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [Visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 50 ? setVisible(true) : setVisible(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {Visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-2 right-2 flex items-center justify-center rounded-lg bg-sky-500 p-1.5 text-white shadow"
          onClick={handleClick}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
