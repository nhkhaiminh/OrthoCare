import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

interface SocialsBtnProps {
    className?: string;
    link?: string;
    children: React.ReactNode
}

function SocialsBtn(props: SocialsBtnProps) {
    return (
        <Link href={props.link ? props.link : "/"}
            className={props.className ? props.className :
                "flex w-10 h-10 items-center justify-center rounded-full bg-white border-white border hover:bg-inherit duration-300"
            }
        >
            {props.children}
        </Link>
    )
}

export default function Footer() {
    return (
        <footer className='relative z-10 grid border-t border-sky-900 gap-10 space-y-8 px-[2rem] lg:px-[10rem] pb-16 pt-16 md:pb-8 md:pt-[4rem] bg-[#163472] text-white h-full align-bottom drop-shadow-md'>
            <div className="absolute z-0 inset-0 polka-dots-footer"></div>
            <div className="z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-12 md:space-y-0">
                <div className="">
                    <h3 className='font-medium text-2xl pb-3'>Socials</h3>
                    <div className="flex space-x-2">
                        <SocialsBtn>
                            <FontAwesomeIcon className='w-6 h-6 text-blue-900 hover:text-white duration-300' icon={faFacebookF} />
                        </SocialsBtn>
                        <SocialsBtn>
                            <FontAwesomeIcon className='w-6 h-6 text-blue-900 hover:text-white duration-300' icon={faInstagram} />
                        </SocialsBtn>
                        <SocialsBtn>
                            <FontAwesomeIcon className='w-6 h-6 text-blue-900 hover:text-white duration-300' icon={faXTwitter} />
                        </SocialsBtn>
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
            <div className="z-20">
                <p>© OrthoCare 2023. All Rights Reserved.</p>
                {/* <p>Website made by <a className='underline text-amber-200 hover:text-amber-300 duration-300' href='https://asleyrobleto.com' target={'_blank'}>Asley R</a>. 2023.</p> */}
            </div>
        </footer>
    )
}
