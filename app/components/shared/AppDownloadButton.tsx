"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@iconify/react';

type AppDownloadButtonProps = {
    className?: string,
    store: 'Google Play' | 'App Store',
}

const AppDownloadButton = ({className, store}: AppDownloadButtonProps) => {
        return (
        <button className={twMerge("py-1 px-3 rounded-lg flex items-center gap-3", className)}>
            <div>
                {
                    store === "Google Play"
                    ?
                    <Icon icon="bxl:play-store" color="white" width="24" height="24" />
                    :
                    <Icon icon="mingcute:appstore-fill" color="white" width="24" height="24" />
                }
            </div>
            <div>
                <h4 className='text-[11px]'>Download on the</h4>
                <p className='text-left font-bold text-base'>{store}</p>
            </div>
        </button>
        )
}

export default AppDownloadButton