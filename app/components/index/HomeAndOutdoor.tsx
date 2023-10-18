import React from 'react'
import ProductBasic from '../shared/ProductBasic'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const HomeAndOutdoor = () => {
    return (
        <section>
            <div>
                <h3 className='font-bold text-xl'>Home and outdoor</h3>
                <div className='overflow-x-auto flex gap-5 py-4 scrollbar-hide'>
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                    <ProductBasic />
                </div>
            </div>
            <div className='py-2 border border-b mb-6'>
                <div className='flex items-center gap-1 text-priBlue'>
                    <p className='font-semibold'>Source now</p>
                    <ArrowRightIcon className='w-6'/>
                </div>
            </div>
        </section>
    )
}

export default HomeAndOutdoor