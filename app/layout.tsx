import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--firaCode",
});

export const metadata: Metadata = {
  title: "Muhammad Asrul Rifa Anwar",
  description: "Junior Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark overflow-x-hidden bg-primary",
          poppins.className,
          firaCode.variable,
        )}
      >
        <Navbar />
        {children}
        <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/grid.svg')] opacity-[15%]" />
        <Footer />
      </body>
    </html>
  );
}
