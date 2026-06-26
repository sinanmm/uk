import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Idea to Launch | Pure Startup Academy",
  description:
    "Turn Your Business Idea into a Launch-Ready Business with Pure Startup Academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans bg-white text-brand-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}

