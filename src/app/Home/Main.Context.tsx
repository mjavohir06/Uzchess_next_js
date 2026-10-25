'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

interface MainContextType {
    isLogin:boolean,
    setLogin:Dispatch<SetStateAction<boolean>>
}

export const MainContext = createContext<MainContextType | null>(null)