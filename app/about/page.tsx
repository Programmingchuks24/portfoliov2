import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
   <div>

    <div className = " px-3 md:flex md:flex-row md:justify-between md:px-7">
      
      <section className = "mt-5 flex flex-col gap-5 p-4 items-center justify-center text-center md:items-start md:text-left md:w-1/2">
        <div className="flex flex-row items-center gap-2 p-1 px-3 rounded-full bg-[#3e4cff]/10 w-fit text-xs text-black font-semibold">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3e4cff] opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-[#3e4cff]"></span>
        </span>

        <p>Available for new opportunities</p>
      </div>

      <div className = " flex flex-col gap-5">
        <p className = "text-4xl font-bold md:text-5xl">Architecting Digital Experiences</p>

        <p>I am a software engineer and fullstack developer with a passion for creating innovative digital solutions. Ive been coding for up to 9 years and have experience in building scalable web applications and mobile apps.</p>
      </div>

      <div className="flex flex-row gap-4">
        <button className="text-white bg-black px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-400 hover:text-black hover:cursor-pointer transition-all">
          Get in Touch
        </button>

        <button className="text-black bg-[#3e4cff]/10 px-6 py-2 rounded-xl text-sm font-semibold hover:bg-gray-400 hover:text-black hover:cursor-pointer transition-all">
          Download CV
        </button>
      </div>
      </section>

      <div className = "mt-10 px-3 md:py-4">
        <Image 
        src="/assets/images/profile.jpeg"
        alt="Your Image"
        width={500}
        height={300}
        className="rounded-2xl object-cover w-full h-auto"
      />
      </div>
      
    </div>
   </div>
  )
}

export default about