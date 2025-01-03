"use client";

import { cn } from "@/lib/utils";
import { Snowflake } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./style.module.scss";

const Snow = () => {
  const isWinterSeason = () => {
    const currentMonth = new Date().getMonth() + 1;
    return currentMonth === 12;
  };
  if (!isWinterSeason()) return null;

  const isSmall = window.innerWidth < 768;

  useEffect(() => {
    const container = document.querySelector(`.${style.container}`);
    const flake = document.querySelector(`.${style.flake}`);

    if (!container || !flake) return;

    function createFlake() {
      const clone = (flake as Element).cloneNode(true) as HTMLElement;
      clone.style.left = `${Math.random() * window.innerWidth}px`;
      clone.style.animationDuration = `${Math.random() * 3 + 5}s`;
      clone.style.opacity = (Math.random() * 0.6 + 0.4).toString();
      (container as HTMLElement).appendChild(clone);

      setTimeout(() => clone.remove(), 8000);
    }

    let interval: NodeJS.Timeout;

    if (!isSmall) interval = setInterval(createFlake, 200);
    else interval = setInterval(createFlake, 500);

    return () => clearInterval(interval);
  }, [isSmall]);

  return ReactDOM.createPortal(
    <div className={cn("text-slate-300 dark:text-background", style.container)}>
      <Snowflake className={style.flake} />
    </div>,
    document.body
  );
};

Snow.displayName = "Snow";

export default dynamic(() => Promise.resolve(React.memo(Snow)), {
  ssr: false,
});
