import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center text-center p-4 py-20 border-t border-gray-200 md:flex-row md:justify-between md:items-center md:px-10 md:text-left">
      <p className="font-bold text-sm tracking-tight">
        © 2026 PORTFOLIO — ENGINEERED FOR IMPACT
      </p>

      <nav className="flex flex-row gap-6 mt-4 md:mt-0 justify-center text-gray-500 text-xs font-medium tracking-widest">
        <Link
          href="https://www.linkedin.com/in/chuks-ezeaku-2319141ab"
          className="hover:text-black transition-colors"
        >
          LINKEDIN
        </Link>
        <Link
          href="https://github.com/Programmingchuks24"
          className="hover:text-black transition-colors"
        >
          GITHUB
        </Link>
        <Link href="/contact" className="hover:text-black transition-colors">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
