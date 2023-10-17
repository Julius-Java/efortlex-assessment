import React from 'react'
import NewsLetterForm from './NewsLetterForm'

const NewsLetterBanner = () => {
    return (
        <section
            className='hidden xl:flex xl:flex-col xl:items-center xl:justify-center container mx-auto min-h-[25vh] bg-gray-200'
        >
            <div>
                <h3 className='text-center text-2xl font-bold'>Subscribe to our Newsletters</h3>
                <p className='text-center'>Get daily news on upcoming offers from many suppliers all over the world</p>
                <NewsLetterForm />
            </div>
        </section>
    )
}

export default NewsLetterBanner