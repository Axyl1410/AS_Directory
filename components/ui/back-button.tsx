"use client";

import { BackButtonProps } from "@/types/props";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton: React.FC<BackButtonProps> = ({ children, ...props }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} {...props}>
      {children}
    </button>
  );
};

export default BackButton;
