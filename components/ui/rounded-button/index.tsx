"use client";
import { RoundedButtonProps } from "@/types/props";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Magnetic from "../magnetic";
import styles from "./style.module.scss";

const Index: React.FC<RoundedButtonProps> = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId = null as NodeJS.Timeout | null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    if (timeline.current) {
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter",
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit",
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Index;
