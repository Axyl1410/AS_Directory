"use client";
import { cn } from "@/lib/utils";
import { SkeletonImageProps } from "@/types/props";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SkeletonImage: React.FC<SkeletonImageProps> = ({
  src,
  height = "16rem",
  width = "100%",
  className = "",
  isPriority = false,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    if (!imageLoading) {
      const timer = setTimeout(() => setPulsing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [imageLoading]);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <div
      className={cn(
        `overflow-hidden bg-[#ccc] shadow-sm`,
        pulsing ? "animate-pulse" : "",
        className,
        `w-[${width}] h-[${height}]`,
      )}
    >
      <motion.div
        initial={{ height: "0px", opacity: 0 }}
        animate={{
          height: imageLoading ? height : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
      >
        <Image
          alt=""
          onLoad={imageLoaded}
          src={src.trimStart()}
          fill
          className={cn("static block object-cover", className)}
          {...(isPriority && { priority: true })}
        />
      </motion.div>
    </div>
  );
};
export default SkeletonImage;
