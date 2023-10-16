"use client"
import React from 'react'
import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { sideNavPrimary, sideNavSecondary, bottomNav } from '@/utils/sideNav'
import { useContextProvider } from '../shared/ContextProvider'
import { twMerge } from 'tailwind-merge'

const Aside = () => {
    const { isAsideOpen, setIsAsideOpen, toggleAside } = useContextProvider()
    return (
        // Overlay
        <aside
            className={twMerge('fixed top-0  h-screen bg-black bg-opacity-30 transition-all duration-200 w-full', isAsideOpen ? "left-0": "-left-full")}
            onClick={toggleAside}
        >
            {/* Main Nav Contents */}
            <div className='bg-white h-full w-[70%]  xs:w-[40%] sm:w-[20%]'>
                <section className='px-3 py-6 bg-gray-200'>
                    <UserCircleIcon className='w-14 text-gray-400' />
                    <div className='mt-2'>
                        <Link href={"/"} className='underline'>Sign in</Link> | <Link href={"/"} className='underline'>Register</Link>
                    </div>
                </section>

                <div className=''>
                    <section className='ps-3 py-4'>
                        <nav>
                            <ul>
                                {sideNavPrimary.map((item, index) => (
                                    <li key={index} className='py-3'>
                                        <Link
                                            href={item.path}
                                            className='flex items-center gap-3'
                                        >
                                            {item.icon}
                                            <span className='block text-lg'>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                    <hr />
                    <section className='ps-3 py-4'>
                        <nav>
                            <ul>
                                {sideNavSecondary.map((item, index) => (
                                    <li key={index} className='py-3'>
                                        <Link
                                            href={item.path}
                                            className='flex items-center gap-3'
                                        >
                                            {item.icon}
                                            <span className='block text-lg'>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                    <hr />
                    <section className='ps-3 py-4'>
                        <nav>
                            <ul>
                                {bottomNav.map((item, index) => (
                                    <li key={index} className='py-2'>
                                        <Link href={item.path}>
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                </div>
            </div>
        </aside>
    )
}

export default Aside