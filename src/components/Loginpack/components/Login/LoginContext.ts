"use client"

import { createContext, Dispatch, SetStateAction } from "react"

export interface LoginType{
    name?:string,
    login?:string,
    loginType:"number"|"email",
    code?:string
}

interface ContextType{
    login:LoginType
    setLogin:Dispatch<SetStateAction<LoginType>>
}

export const LoginContext=createContext<ContextType|null>(null)