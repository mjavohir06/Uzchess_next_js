"use client"

import { useContext, useState } from "react"
import { LoginContext } from "../../LoginContext"
import { steptype } from "../../LoginMain"
import BackTo from "../../shared/BackTo"
import PasswordInput from "../../shared/PasswordInput"
import { fetcher } from "@/lib/utills/FetchRes"

const PasswordPlase = ({ setStep, step ,setOpen}: { step: steptype, setStep: (promp: steptype) => void ,setOpen:(promp:boolean)=>void}) => {

    const ctx = useContext(LoginContext)

    const [Password1,setPassword1]=useState("")
    const [Password2,setPassword2]=useState("")


    if (!ctx) return <></>
    const { login, setLogin } = ctx

    async function Tasdiqlash(){
        if(Password1!==Password2) return alert("Parol xato takrorlangan!")
        if(Password1.length<6) return alert("Parol kamida 6ta belgigan iborat bo'lishi kerak!")

        const res=await fetcher.post<{accessToken:string}>("auth/set-password",{login:login.login,code:login.code,password:Password1})
        if(!res.data) return
        if(res.status==201) return setOpen(false)
    }

    return (
        <>
            <BackTo setStep={setStep} step={step} />
            <div className="p-6 w-full grid gap-6 h-100 content-start">
                <div className="grid gap-1">
                    <p className="text-[15px]">Parol:</p>
                    <PasswordInput password={Password1} setPassword={setPassword1}/>
                </div>
                <div className="grid gap-1">
                    <p className="text-[15px]">Parol:</p>
                    <PasswordInput password={Password2} setPassword={setPassword2} placeholder="Parolni takrorlang"/>
                </div>
            </div>
            <div className='p-6'>
                <div className='w-full h-11 rounded-lg bg-(--blue) flex items-center  justify-center ' onClick={Tasdiqlash}>
                    <p className='font-bold'>Tasdiqlash</p>

                </div>
            </div>
        </>
    )
}

export default PasswordPlase
