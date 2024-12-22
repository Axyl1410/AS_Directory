"use client";

import { BackButtonProps } from "@/types/props";
import { useRouter } from "next/navigation";

export default function BackButton({ children, ...props }: BackButtonProps) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} {...props}>
      {children}
    </button>
  );
}
