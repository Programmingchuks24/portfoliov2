"use client";
import { usePathname } from "next/navigation"; // Import this hook
import { Menu, Moon, Terminal, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip,  TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 

  // Helper to check if a link is active
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-4 py-4 bg-white/80">
      <p className="text-lg md:text-xl font-bold">CHUKS_PORTFOLIO</p>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-all duration-200 hover:text-black ${
              isActive(link.href)
                ? "text-black underline underline-offset-8 font-medium"
                : "text-gray-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Icons & Resume */}
      <div className="hidden md:flex flex-row gap-4 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Moon
              className="cursor-pointer hover:text-blue-500 transition-colors"
              size={20}
            />
          </TooltipTrigger>

          <TooltipContent>Toggle Dark Mode (Coming Soon)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com/Programmingchuks24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Terminal
                className="cursor-pointer hover:text-green-500 transition-colors"
                size={20}
              />
            </Link>
          </TooltipTrigger>

          <TooltipContent>View My GitHub</TooltipContent>
        </Tooltip>

        <button className="text-white bg-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-400 hover:text-black hover:cursor-pointer transition-all">
          RESUME
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-xl md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className={`text-lg ${isActive(link.href) ? "font-bold text-black" : "text-gray-600"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;