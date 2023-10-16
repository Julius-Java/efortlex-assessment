"use client"
import React from 'react'
import { Bars3Icon, } from '@heroicons/react/20/solid'
import { ShoppingCartIcon, UserIcon, EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import brandLogo from '@/public/assets/brandLogo.svg'
import Link from 'next/link'
import { useContextProvider } from '../shared/ContextProvider'

const Navigation = () => {
    const { toggleAside } = useContextProvider()
    return (
        <nav className='py-3 px-2 md:py-5'>
            <div className='flex justify-between items-center container mx-auto'>
                <div className='flex items-center gap-4 sm:gap-6 lg:gap-7'>
                    <button aria-label='Side Bar Navigation' onClick={toggleAside}>
                        <Bars3Icon className='w-7' />
                    </button>
                    <Link href={"/"} aria-label='Home'>
                        <Image src={brandLogo} alt='Efortlex Stores' />
                    </Link>
                </div>
                <div className='flex items-center gap-4 sm:gap-6 lg:gap-7'>
                    <Link href={"/"} aria-label='Shopping Cart'>
                        <ShoppingCartIcon className='w-6' />
                    </Link>
                    <Link href={"/"} aria-label='User Account'>
                        <UserIcon className='w-6' />
                    </Link>
                    <Link href={"/"} aria-label='Messages' className='hidden sm:block'>
                        <EnvelopeIcon className='w-6' />
                    </Link>
                    <Link href={"/"} aria-label='Orders' className='hidden sm:block'>
                        <HeartIcon className='w-6' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation