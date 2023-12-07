import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='grid gap-10 space-y-8 px-[2rem] lg:px-[10rem] pb-16 pt-16 md:pb-8 md:pt-[4rem] bg-frblue text-white h-full align-bottom'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-12 md:space-y-0">
                <div className="">
                    <h3 className='font-medium text-2xl pb-3'>Socials</h3>
                    <div className="flex space-x-2">
                        <Link className="flex w-10 h-10 items-center justify-center rounded-full bg-white border-white border hover:bg-sky-800 duration-300" href={'/'}>
                            <FontAwesomeIcon className='w-6 h-6 text-frblue hover:text-white duration-300' icon={faFacebookF} />
                        </Link>
                        <Link className="flex w-10 h-10 items-center justify-center rounded-full bg-white border-white border hover:bg-sky-800 duration-300" href={'/'}>
                            <FontAwesomeIcon className='w-6 h-6 text-frblue hover:text-white duration-300' icon={faInstagram} />
                        </Link>
                        <Link className="flex w-10 h-10 items-center justify-center rounded-full bg-white border-white border hover:bg-sky-800 duration-300" href={'/'}>
                            <FontAwesomeIcon className='w-6 h-6 text-frblue hover:text-white duration-300' icon={faXTwitter} />
                        </Link>
                    </div>
                </div>
                <div className="justify-start">
                    <h3 className='font-medium text-2xl pb-3'>Services</h3>
                    <ul className='space-y-3'>
                        <li>
                            <Link href={''} className='hover:text-gray-300 duration-100'>
                                General
                            </Link>
                        </li>
                        <li>
                            <Link href={''} className='hover:text-gray-300 duration-100'>
                                Cosmetic
                            </Link>
                        </li>
                        <li>
                            <Link href={''} className='hover:text-gray-300 duration-100'>
                                Surgical
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className='font-medium text-2xl pb-3'>Company</h3>
                    <div className="grid space-y-3">
                        <p>
                            <Link href={'/'} className='hover:text-gray-300 duration-100'>Home</Link>
                        </p>
                        <p>
                            <Link href={'/about'} className='hover:text-gray-300 duration-100'>About</Link>
                        </p>
                        <p>
                            <Link href={'/contact-us'} className='hover:text-gray-300 duration-100'>Contact</Link>
                        </p>
                    </div>
                </div>
                <div className="">
                    <h3 className='font-medium text-2xl pb-3'>Contact Us</h3>
                    <div className="space-y-5">
                        <p>
                            OrthoCare Dental Clinic
                            123 Avenue Maple, Suite 201
                            Montreal, QC, H3A 1W3,
                            Canada
                        </p>
                        <p>+1 (514) 555-7890</p>
                        <p className='hover:text-gray-300 duration-300 cursor-pointer'>info@orthocare.com</p>
                    </div>
                </div>
            </div>
            <div className="">
                <p>© OrthoCare 2023. All Rights Reserved.</p>
                <p>Website made by <a className='underline text-amber-200 hover:text-amber-300 duration-300' href='https://asleyrobleto.com' target={'_blank'}>Asley R</a>. 2023.</p>
            </div>
        </footer>
    )
}
