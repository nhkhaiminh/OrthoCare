import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavbarList() {
    return (
        <ul className="flex space-x-8">
            <li className="">
                <Link href={'/about'}>
                    ABOUT
                </Link>
            </li>
        </ul>
    )
}

function Logo() {
    return (
        <>
            <Image
                className=''
                src={'OrthoCare-Logotype.svg'}
                width={200}
                height={200}
                alt='OrthoCare Logo'
            />
        </>
    )
}

function Navbar() {
    return (
        <nav className='grid grid-cols-2 px-[5rem] py-5 border'>
            <div className="flex">
                <Link href={'/'}>
                    <Logo />
                </Link>
            </div>
            <div className="">
                <NavbarList />
            </div>
        </nav>
    )
}

export default Navbar
