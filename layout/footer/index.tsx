"use client";

import Magnetic from "@/components/ui/magnetic";
import Rounded from "@/components/ui/rounded-button";
import SkeletonImage from "@/components/ui/skeleton-image";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.scss";

const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const getVietnamTime = () => {
    const options = {
      timeZone: "Asia/Ho_Chi_Minh",
      hour12: true,
      hour: "2-digit" as "2-digit",
      minute: "2-digit" as "2-digit",
      timeZoneName: "short" as "short",
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date());
  };

  return (
    <>
      <motion.div ref={container} className={styles.contact}>
        <div className={cn("container", styles.body)}>
          <div className={styles.title}>
            <div>
              <div className={styles.imageContainer}>
                <SkeletonImage
                  src={`https://avatars.githubusercontent.com/Axyl1410`}
                />
              </div>
              <h2>Let's work</h2>
            </div>
            <h2>together!</h2>
            <motion.div style={{ x }} className={styles.buttonContainer}>
              <a
                href="https://github.com/Axyl1410"
                target="_blank"
                rel="noreferrer"
              >
                <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                  <p>Get in touch</p>
                </Rounded>
              </a>
            </motion.div>
            <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>

          <div className={styles.info}>
            <div>
              <div>
                <h3>Version</h3>
                <p>2024 © Edition</p>
              </div>
              <div>
                <h3>Vietnam</h3>
                <p>{getVietnamTime()}</p>
              </div>
            </div>
            <div className="flex w-full justify-between md:block md:w-auto">
              <div>
                <h3>Socials</h3>
                <a
                  href="https://github.com/axyl1410"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Magnetic>
                    <p>Github</p>
                  </Magnetic>
                </a>
              </div>
              <div>
                <h3>About</h3>
                <a
                  className="w-fit"
                  href="https://nguyentruonggiang.id.vn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Magnetic>
                    <p>Axyl</p>
                  </Magnetic>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
