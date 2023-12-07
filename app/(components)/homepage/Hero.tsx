"use client"

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FadeBtn from '../FadeBtn'
import ComparisonSlider from '../ComparisonSlider';

export default function Hero() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-cyan-700 pt-16'>
            <div className="grid items-center px-mobilex md:px-normalx text-white pt-[5rem] pb-[3rem] lg:pb-[8rem]">
                <div className="flex flex-col gap-8 md:gap-5">
                    <h1 className='font-merry font-semibold text-4xl md:text-5xl'>
                        A Dental Practice Designed with You in Mind. Finally.
                    </h1>
                    <p className='text-lg md:text-xl'>YOUR SMILE STARTS HERE</p>
                    <div className="relative">
                        <FadeBtn>
                            <Link href={'/book-appointment'}>Book Free Consult</Link>
                        </FadeBtn>
                    </div>
                </div>
            </div>
            <div className="flex justify-end overflow-hidden relative px-mobilex md:px-normalx lg:px-0">
                <Image
                    className='w-full rounded-t-lg lg:rounded-none duration-200'
                    src={'/media/dentist-with-patient-2.jpg'}
                    width={500}
                    height={100}
                    alt='Dentist with patient'
                    priority
                />
            </div>
        </div>
    )
}
