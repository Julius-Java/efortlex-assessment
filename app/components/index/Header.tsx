import React from 'react'

const Header = () => {
    return (
        <header
            className='bg-bannerImg min-h-[300px] px-5 py-6'
        >
            <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3'>Latest trending <span className='block font-bold'>Electronic items</span></h3>
            <button className='bg-white text-secBlue rounded-lg py-2 px-3 shadow-lg md:px-5 font-semibold'>Learn More</button>
        </header>
    )
}

export default Header