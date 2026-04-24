import React from 'react'
import Cool from './cool'
import Header from '@/components/header'

const page = () => {
  return (
    <>

    <div className="bg-white h-screen w-screen text-black">

      <p>cool stuff</p>

      <Cool />

      <Header />
    </div>
    </>
  )
}

export default page