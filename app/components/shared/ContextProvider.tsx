"use client"
import React, {createContext, useContext} from 'react'

const Context = createContext<any>({})

type ContextProviderProps = {
    children: React.ReactNode
}

const ContextProvider = ({children}: ContextProviderProps) => {

    const [isAsideOpen, setIsAsideOpen] = React.useState(false)

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen)
    }

    return (
        <Context.Provider
            value={{
                isAsideOpen,
                setIsAsideOpen,
                toggleAside
            }}
        >
            {children}
        </Context.Provider>
    )
}

const useContextProvider = () => {
    return useContext(Context)
}

export { ContextProvider, useContextProvider}