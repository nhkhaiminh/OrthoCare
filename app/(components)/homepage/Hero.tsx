"use client"

import Link from 'next/link'
import React from 'react'
import FadeBtn from '../FadeBtn'

const bgImage = {
    backgroundImage: "url('/media/dentist-operation.jpg')"
}

export default function Hero() {
    return (
        <div style={bgImage} className='relative z-10 bg-top bg-cover bg-fixed bg-no-repeat grid grid-cols-1 lg:grid-cols-2 pt-32 lg:pt-44'>
            <div className="absolute bg-black/40 inset-0 -z-10"></div>
            <div className="z-10 grid items-center px-mobilex md:px-normalx text-white pt-[5rem] pb-[3rem] lg:pb-[8rem]">
                <div className="flex flex-col gap-8 md:gap-5">
                    <h1 className='font-merry font-semibold text-4xl md:text-5xl'>
                        A Dental Practice Designed with You in Mind. Finally.
                    </h1>
                    <p className='text-lg md:text-xl'>YOUR SMILE STARTS HERE</p>
                    <div className="relative">
                        <Link href={'/book-appointment'}>
                            <FadeBtn>
                                Book Free Consult
                            </FadeBtn>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-end overflow-hidden relative px-mobilex md:px-normalx lg:px-0">
                {/* <Image
                    className='w-full rounded-t-lg lg:rounded-none duration-200'
                    src={'/media/dentist-with-patient-2.jpg'}
                    width={500}
                    height={100}
                    alt='Dentist with patient'
                    priority
                /> */}
            </div>
        </div>
    )
}
