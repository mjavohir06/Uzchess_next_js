"use client"

import { useContext, useEffect, useState } from "react"
import { steptype } from "../../LoginMain"
import BottomMenu from "../../shared/BottomMenu"
import MenuTop from "../../shared/MenuTop"
import PasswordInput from "../../shared/PasswordInput"
import { LoginContext } from "../../LoginContext"
import { fetcher } from "@/lib/utills/FetchRes"

const SinginEmail = ({ setStep, step,setOpen }: { step: steptype, setStep: (promp: steptype) => void ,setOpen:(promp:boolean)=>void}) => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const ctx = useContext(LoginContext)

    if (!ctx) return <></>
    const { login, setLogin } = ctx

    useEffect(() => {
        if (login.loginType == "email") setEmail(login.login ?? "")
    }, [login])
    async function yubor() {
        if(!email.includes("@") || !email.includes(".") || password.length<6) return
        const res = await fetcher.post<{ accessToken: string }>("auth/sign-in", { login: email, password: password})
        if(res.status==201) return setOpen(false)
        
    }

    return (
        <>
            <MenuTop setStep={setStep} step={step} />

            <div className="w-full h-auto p-6 grid content-start gap-6">
                <div>
                    <p className="text15">Elektron pochta</p>
                    <input type="text" className="logininput" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" />
                </div>


                <div>
                    <div className="flex items-center justify-between">
                        <p className="text15">Parol</p>
                        <p className="cursor-pointer" onClick={() => setStep({ type: "reemail", step: 0 })}>Parolni unutdingizmi?</p>
                    </div>
                    <PasswordInput password={password} setPassword={setPassword} />
                </div>

                <div>

                </div>
            </div>

            <BottomMenu setStep={setStep} step={step} onClick={yubor} />
        </>
    )
}

export default SinginEmail