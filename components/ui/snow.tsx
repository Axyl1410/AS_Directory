"use client";

import { cn } from "@/lib/utils";
import { Snowflake } from "lucide-react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./style.module.scss";

const Snow = () => {
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

    const interval = setInterval(createFlake, 200);

    return () => clearInterval(interval);
  }, []);

  return ReactDOM.createPortal(
    <div className={cn("text-slate-300 dark:text-background", style.container)}>
      <Snowflake className={style.flake} />
    </div>,
    document.body,
  );
};

export default Snow;
