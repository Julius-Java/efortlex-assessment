"use client"
import React from 'react'
import brandLogo from '@/public/assets/brandLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import AppDownloadButton from '../shared/AppDownloadButton'
import US from 'country-flag-icons/react/3x2/US'
import { footerSocials, footerInfo, footerAbout, footerPartnership, footerUser } from '@/utils/footerNav'

const Footer = () => {
    return (
        <footer className='hidden xl:block px-3 py-6'>
            <div className='container mx-auto'>
                <section className='grid grid-cols-12 gap-5 items-center py-6'>
                    {/* Socials */}
                    <div className='col-span-2'>
                        <Link href={"/"}>
                            <Image src={brandLogo} alt='Efortlex Store' />
                        </Link>
                        <p className='mt-3'>Best information about the company gies here but now lorem ipsum is</p>
                        <ul className='flex items-center gap-4 mt-3'>
                            {
                                footerSocials.map(({name, href, icon}, _) => (
                                    <li key={href}>
                                        <Link href={href}>
                                            <span sr-only className='hidden'>{name}</span>
                                            {icon}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* About */}
                    <div className='col-span-2 text-center'>
                        <h3 className='font-bold'>About</h3>
                        <nav className='mt-2'>
                            <ul>
                                {
                                    footerAbout.map(({name, href}, _) => (
                                        <li key={href}>
                                            <a href={href}>
                                                <span className='block'>{name}</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    {/* Partnership */}
                    <div className='col-span-2 text-center'>
                        <h3 className='font-bold'>Partnership</h3>
                        <nav className='mt-2'>
                            <ul>
                                {
                                    footerPartnership.map(({name, href}, _) => (
                                        <li key={href}>
                                            <a href={href}>
                                                <span className='block'>{name}</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    {/* Info */}
                    <div className='col-span-2 text-center'>
                        <h3 className='font-bold'>Information</h3>
                        <nav className='mt-2'>
                            <ul>
                                {
                                    footerInfo.map(({name, href}, _) => (
                                        <li key={href}>
                                            <a href={href}>
                                                <span className='block'>{name}</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    {/* User */}
                    <div className='col-span-2 text-center'>
                        <h3 className='font-bold'>User</h3>
                        <nav className='mt-2'>
                            <ul>
                                {
                                    footerUser.map(({name, href}, _) => (
                                        <li key={href}>
                                            <a href={href}>
                                                <span className='block'>{name}</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    {/* Download App */}
                    <div className='col-span-2 text-center'>
                        <h3 className='font-bold'>Get app</h3>
                        <div className='flex flex-col '>
                            <AppDownloadButton
                                store='App Store'
                                className='bg-black text-white gap-4 mt-2 justify-center w-48 mx-auto'
                            />

                            <AppDownloadButton
                                store='Google Play'
                                className='bg-black text-white gap-1 mt-2 justify-center w-48 mx-auto'
                            />
                        </div>
                    </div>
                </section>
                <section className='bg-gray-100 py-3 px-3 flex justify-between'>
                    <span className='block'>&copy; {new Date().getFullYear()} Ecommerce</span>
                    <div className='flex items-center gap-2'>
                        <US title="United States" className="w-5"/>
                        <p>English</p>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer