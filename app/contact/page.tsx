"use client"
import {
  BriefcaseBusiness,
  Code,
  Loader2,
  Mail,
  MapPin,
  SendHorizonal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sendEmail } from "../actions/sendEmail";
import {toast} from "sonner";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/submitButton";

const Page = () => {


  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col gap-4 mb-16 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
          Let&apos;s Connect
        </h1>
        <p className="text-gray-500 text-lg md:w-2/3 leading-relaxed">
          I&apos;m currently available for freelance projects and full-time
          opportunities. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
      </div>

      {/* 2. Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: THE FORM (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm">
          <form
            className="flex flex-col gap-8"
            action={async (formData) => {
              const result = await sendEmail(formData);
              if (result.success) {
                toast.success("Message sent! I'll get back to you soon.", {position:"top-center"});
              } else {
                toast.warning("Something went wrong. Please try again.", {position:"top-center"});
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black ml-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#3e4cff] outline-none transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#3e4cff] outline-none transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-black ml-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                required
                className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#3e4cff] outline-none transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-black ml-1">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Hello, I'd like to discuss..."
                required
                className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#3e4cff] outline-none transition-all resize-none placeholder:text-gray-300"
              />
            </div>

            <SubmitButton />
          </form>
        </div>

        {/* RIGHT: THE WIDGET STACK */}
        <div className="flex flex-col gap-8">
          {/* Email Widget */}
          <div className="flex items-center gap-5 p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
            <div className="relative flex items-center justify-center size-12 bg-[#e8eaf6] rounded-full shrink-0">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#3e4cff] opacity-15 blur-sm" />
              <Mail
                className="relative size-5 text-[#3e4cff]"
                strokeWidth={2.5}
              />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                Email
              </h3>
              <p className="text-gray-500 text-sm truncate">
                chuksezeaku@gmail.com
              </p>
            </div>
          </div>

          {/* Map Widget */}
          <div className="relative overflow-hidden w-full h-64 rounded-[32px] border border-gray-100 group">
            <Image
              src="/assets/images/map.jpg"
              alt="map"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
              <MapPin className="size-4 text-black" fill="black" />
              <span className="font-bold text-sm text-black">
                Port Harcourt, Nigeria
              </span>
            </div>
          </div>

          {/* Socials Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="https://github.com/Programmingchuks24"
              className="p-8 flex flex-col rounded-[28px] gap-3 justify-center items-center bg-[#1a1a1a] text-white hover:scale-[1.05] transition-all"
            >
              <Code className="size-6" />
              <span className="font-bold text-xs uppercase tracking-widest">
                GitHub
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/chuks-ezeaku-2319141ab"
              className="p-8 flex flex-col rounded-[28px] gap-3 justify-center items-center bg-[#0077b5] text-white hover:scale-[1.05] transition-all"
            >
              <BriefcaseBusiness className="size-6" />
              <span className="font-bold text-xs uppercase tracking-widest">
                LinkedIn
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
