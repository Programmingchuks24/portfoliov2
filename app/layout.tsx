import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chukwudubem Ezeaku - Full Stack Developer",
  description: "Welcome to my portfolio! I'm Chukwudubem Ezeaku, a passionate full stack developer with expertise in building scalable web applications and mobile apps. With over 9 years of coding experience, I specialize in creating innovative digital solutions that drive business success. Explore my projects, skills, and experience to see how I can help bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
