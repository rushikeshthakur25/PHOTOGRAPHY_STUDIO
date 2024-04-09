"use client";
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'


function HeroSections() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="pink"
      />
        
        <div className='p-4 relative z-10 w-full text-center'>
        
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">PHOTOGRAPHY STUDIO</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Capturing the moments of today that will wow your heart tomorrow</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button>Explore More</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSections
