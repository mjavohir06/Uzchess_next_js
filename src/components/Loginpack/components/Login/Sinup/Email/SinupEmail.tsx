"use client"

import { useContext, useEffect, useState } from "react"
import { steptype } from "../../LoginMain"
import BottomMenu from "../../shared/BottomMenu"
import MenuTop from "../../shared/MenuTop"
import { LoginContext } from "../../LoginContext"
import { NextTo } from "../../shared/utills/NextTo"
import { fetcher } from "@/lib/utills/FetchRes"

const SinupEmail = ({ setStep, step }: { step: steptype, setStep: (promp: steptype) => void }) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const ctx = useContext(LoginContext)

    if (!ctx) return <></>
    const { login, setLogin } = ctx

    useEffect(()=>{
        if(login.loginType=="email") setEmail(login.login??"")
        setName(login.name??"")
    },[login])

    async function next() {

        // if (name.length < 3 || !email.includes("@") || !email.includes(".")) return alert("Ma'lumotlarni to'liq to'ldiring")
        setLogin(p => { return { ...p, loginType: "email", login: email, name: name } })

        // const res=await PostNameAuth("email",{login:email,fullName:name}) 
        const res =await fetcher.post("auth/sign-up",{login:email,fullName:name,loginType:"email"},{excludeStatus:[409]})
        
        if(res.status==409) return alert("")
        
        NextTo(step, setStep)
    }


    return (
        <>
            <MenuTop setStep={setStep} step={step} />

            <div className="w-full h-auto p-6 grid content-start gap-6">
                <div>
                    <p className="text15">Ism-sharifingiz</p>
                    <input type="text" className="logininput" value={name} onChange={e => setName(e.target.value)} placeholder="Ism-sharfingizni kiriting" />
                </div>


                <div>
                    <p className="text15">Elektron pochta</p>
                    <input type="text" className="logininput" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" />
                </div>

                <div>
                    <p className="text-[14px]">Ro‘yxatdan o‘tish tugmasini bosgach foydalanish <span className="text-(--blue)">shartlari va qoidalarini</span> qabul qilaman</p>
                </div>
            </div>

            <BottomMenu setStep={setStep} step={step} onClick={next} />
        </>
    )
}

export default SinupEmail
