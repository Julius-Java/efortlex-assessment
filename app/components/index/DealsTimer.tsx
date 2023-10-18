"use client"
import React from 'react'

const DealsTimer = () => {
    return (
        <div className='flex gap-3 text-gray-500'>
            <div className='flex flex-col bg-gray-200 rounded px-3 py-2 items-center'>
                <span className='block text-xl font-bold'>13</span>
                <span className='block text-xs'>Hours</span>
            </div>

            <div className='flex flex-col bg-gray-200 rounded px-3 py-2 items-center'>
                <span className='block text-xl font-bold'>13</span>
                <span className='block text-xs'>Hours</span>
            </div>

            <div className='flex flex-col bg-gray-200 rounded px-3 py-2 items-center'>
                <span className='block text-xl font-bold'>13</span>
                <span className='block text-xs'>Hours</span>
            </div>
        </div>
    )
}

export default DealsTimer