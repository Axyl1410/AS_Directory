"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

export default function BackButton({ children, ...props }: BackButtonProps) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} {...props}>
      {children}
    </button>
  );
}
