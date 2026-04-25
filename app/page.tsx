import React from 'react'
import Cool from './cool'
import Header from '@/components/header'
import Image from 'next/image';

const page = () => {
  return (
    <div className="mt-10 mx-4">
      <div className="flex flex-row items-center gap-2 p-2 rounded-full bg-[#3e4cff]/10 w-fit text-xs text-[#3e4cff] font-semibold">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3e4cff] opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-[#3e4cff]"></span>
        </span>

        <p>Software engineer</p>
      </div>

      <div className="mt-8 flex flex-row  ">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold md:w-1/3">
            Building FullStack Applications and Mobile Apps
          </p>
          <p className="text-gray-500 mt-4 md:w-1/2">
            I am a software engineer specializing in building exceptional
            digital experiences. Currently, I am focused on building responsive
            full-stack web applications and mobile apps.
          </p>

          <div >
            <button className="text-white bg-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-400 hover:text-black hover:cursor-pointer transition-all">
              View Projects
            </button>
          </div>
        </div>

        <Image src="/assets/images/pic.png" alt="Profile Image" className="hidden md:block" width={250} height={200} />
      </div>
    </div>
  );
}

export default page