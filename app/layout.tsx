import ScrollToTop from "@/components/common/scroll-to-top";
import { cn } from "@/lib/utils";
import { SanityLive } from "@/sanity/lib/live";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { ThemeProvider } from "./../components/theme/theme-context";
import "./globals.scss";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Axyl's Directory",
  description: "A Directory by Axyl",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
  }

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-screen overflow-x-hidden bg-background font-work-sans text-text antialiased transition-colors duration-300 ease-out dark:bg-background-dark dark:text-text-dark",
          workSans.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider>
            <ScrollToTop />
            <Toaster closeButton richColors position="top-left" />
            {children}
          </ThemeProvider>
          <SanityLive />
        </SessionProvider>
      </body>
    </html>
  );
}
