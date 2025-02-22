import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ResumeProvider } from "@/context/ResumeContext";
import { ThemeProvider } from '@/context/ThemeContext';
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "GitHub Legacy",
  description: "Transform your GitHub profile into a professional resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/LOGO.png" />
        <title>GitHub Legacy</title>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <ResumeProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
