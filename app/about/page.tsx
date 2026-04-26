import { Timeline } from '@/components/timeline'
import { Database, Laptop, Phone, ScreenShare, Server } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <div className=" px-3 md:flex md:flex-row md:justify-between md:px-7">
        <section className="mt-5 flex flex-col gap-5 p-4 items-center justify-center text-center md:items-start md:text-left md:w-1/2">
          <div className="flex flex-row items-center gap-2 p-1 px-3 rounded-full bg-[#3e4cff]/10 w-fit text-xs text-black font-semibold">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3e4cff] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#3e4cff]"></span>
            </span>

            <p>Available for new opportunities</p>
          </div>

          <div className=" flex flex-col gap-5">
            <p className="text-4xl font-bold md:text-5xl">
              Architecting Digital Experiences
            </p>

            <p className="text-gray-600">
              I am a software engineer and fullstack developer with a passion
              for creating innovative digital solutions. Ive been coding for up
              to 9 years and have experience in building scalable web
              applications and mobile apps.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <Link
              href="/contact"
              className="text-white bg-black px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-400 hover:text-black hover:cursor-pointer transition-all"
            >
              Get in Touch
            </Link>

            <a
              href="/assets/cv/Chukwudubem_Ezeaku_FullStack_Developer.pdf"
              download={"Chukwudubem_Ezeaku_FullStack_Developer.pdf"}
              className="text-black bg-[#3e4cff]/10 px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-400 hover:text-white hover:cursor-pointer transition-all"
            >
              Download CV
            </a>
          </div>
        </section>

        <div className="mt-10 px-3 md:py-4">
          <Image
            src="/assets/images/profile.jpeg"
            alt="Your Image"
            width={500}
            height={300}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

      <section className="py-10 px-6 items-center justify-center text-center md:items-start md:text-left md:px-7">
        <div>
          <p className="text-3xl font-bold">Experience</p>
          <p className="text-gray-600">
            A decade of building software at scale
          </p>
        </div>

        <Timeline />
      </section>

      <section className="py-10 px-6 items-center justify-center text-center md:items-start md:text-left md:px-7">
        <div>
          <p className="text-3xl font-bold">Capabilities</p>
          <p className="text-gray-600">
            Tools and Technologies I use to solve problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {/* DB Icon */}
                <Server size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-600 text-sm">
                Designing resilient, scalable systems that handle complex
                business logic efficiently.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Python
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Node.js
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Django
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Express.js
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Supabase
              </span>

              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                PostgreSQL
              </span>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {/* DB Icon */}
                <Laptop size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">
                Crafting pixel-perfect, responsive interfaces that provide seamless user experiences across devices.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                React
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                TypeScript
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Tailwind CSS
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                Next.js
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
                React Native
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about