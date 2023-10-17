"use client"
import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

type FormValues = {
    email: string
}

const NewsLetterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({mode: "onBlur"})

    const formSubmit = ({email}: FormValues) => {
        console.log(email)
    }
    return (
        <form
            onSubmit={handleSubmit(formSubmit)}
            className='flex items-center justify-center gap-3 py-5'
        >
            <div className='relative'>
                <input
                    type="email"
                    className='py-2 rounded-lg px-2 text-base'
                    {
                        ...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Entered valid email'
                            }
                        })
                    }
                />
                <span
                    className='text-xs text-rose-500 block font-semibold absolute -bottom-4 left-0'
                >
                    {errors?.email?.message}
                </span>
            </div>
            <button className='bg-priBlue py-2 px-4 rounded-lg text-white'>Subscribe</button>
        </form>
    )
}

export default NewsLetterForm