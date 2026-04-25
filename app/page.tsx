import React from 'react'
import Image from 'next/image';
import { Database } from 'lucide-react';

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

          <div>
            <button className="text-white bg-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-400 hover:text-black hover:cursor-pointer transition-all">
              View Projects
            </button>
          </div>
        </div>

        <Image
          src="/assets/images/pic.png"
          alt="Profile Image"
          className="hidden md:block"
          width={250}
          height={200}
        />
      </div>

      <div className="mt-16 items-center justify-center text-center md:items-start md:text-left ">
        <div>
          <p className="text-3xl font-bold border-b border-gray-400 pb-5">
            Selected Works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4  mx-auto">
          {/* Global Event Mesh - Large Card */}
          <div className="md:col-span-2 bg-gray-400 rounded-3xl p-8 min-h-75 relative overflow-hidden">
            <div className="bg-white/90 p-6 rounded-2xl max-w-sm">
              <div className="flex gap-2 mb-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-gray-200 rounded">
                  React Native
                </span>
                <span className="text-[10px] font-bold px-2 py-1 bg-gray-200 rounded">
                  Supabase
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Helpu</h3>
              <p className="text-gray-600 text-sm">
                A counselling mobile app that connects students with counsellors
              </p>
            </div>
            {/* You would add your waveform background image here */}
            <Image src = "/assets/images/counsell.png" alt="Counselling App" fill className="object-cover opacity-20 absolute inset-0" />
          </div>

          {/* Nexus DB Engine - Tall Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {/* DB Icon */}
                <Database size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Django Library app</h3>
              <p className="text-gray-600 text-sm">
                A django library app with CRUD operations and user authentication. Built with Django
              </p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded self-start">
              Python
            </span>
          </div>

          {/* Apollo Gateway - Small Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8">
            <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600">
              {/* Apollo Icon */}
            </div>
            <h3 className="text-2xl font-bold mb-2">Apollo Gateway</h3>
            <p className="text-gray-600 text-sm">
              Unified GraphQL federation layer...
            </p>
          </div>

          {/* Zero-Trust Network Infra - Large Dark Card */}
          <div className="md:col-span-2 bg-[#1a1a1a] text-white rounded-3xl p-8 min-h-62.5">
            <div className="flex gap-2 mb-4">
              <span className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded">
                TERRAFORM
              </span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded">
                AWS
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Zero-Trust Network Infra
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Complete overhaul of corporate cloud infrastructure...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page