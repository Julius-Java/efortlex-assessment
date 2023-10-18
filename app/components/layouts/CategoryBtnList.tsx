import React from 'react'

const categories = [
    'Groceries',
    'Electronics',
    'Fashion',
    'Furniture',
    'Health',
    'Beauty',
    'Baby',
    'Gaming',
    'Automobile',
    'Books',
    'Others'
]

const CategoryBtnList = () => {
    return (
        <section className='overflow-x-auto py-3 container mx-auto px-3 lg:px-0'>
            <ul className='flex'>
                {categories.map((category, index) => (
                    <li key={index} className='inline-block mx-2'>
                        <button className='text-sm bg-gray-100 text-secBlue rounded-lg py-2 px-3'>{category}</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CategoryBtnList