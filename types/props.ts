import { Author, Blog } from "./types";

export type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface SkeletonImageProps {
  src: string;
  height?: string;
  width?: string;
  className?: string;
  isPriority?: boolean;
}

export interface BackButtonProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

export interface RoundedButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  [key: string]: unknown;
}

export type CardProps = Omit<Blog, "author"> & { author?: Author };

export type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);
