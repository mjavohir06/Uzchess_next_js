"use client"

import { useContext, useEffect, useState } from "react"
import { steptype } from "../../LoginMain"
import BottomMenu from "../../shared/BottomMenu"
import MenuTop from "../../shared/MenuTop"
import TelInput from "../../shared/TelInput"
import PasswordInput from "../../shared/PasswordInput"
import { LoginContext } from "../../LoginContext"
import { fetcher } from "@/lib/utills/FetchRes"

const SinginTel = ({ setStep, step, setOpen }: { step: steptype, setStep: (promp: steptype) => void, setOpen: (promp: boolean) => void }) => {

    const [tel, setTel] = useState("")
    const [password, setPassword] = useState("")
    const ctx = useContext(LoginContext)

    if (!ctx) return <></>
    const { login, setLogin } = ctx

    useEffect(() => {
        if (login.loginType == "number") setTel(login.login ?? "")
    }, [login])
    async function yubor() {
        if (tel.length!==9|| password.length < 6) return
        const res = await fetcher.post<{ accessToken: string }>("auth/sign-in", { login: tel, password: password })
        if (res.status == 201) return setOpen(false)

    }

    return (
        <>
            <MenuTop setStep={setStep} step={step} />
            <div className="w-full h-auto p-6 grid content-start gap-6 grow">

                <div>
                    <p className="text15">Telefon raqam</p>
                    <TelInput setTel={setTel} tel={tel} />
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text15">Parol</p>
                        <p className="cursor-pointer" onClick={() => setStep({ type: "retel", step: 0 })}>Parolni unutdingizmi?</p>
                    </div>
                    <PasswordInput password={password} setPassword={setPassword} />
                </div>

                <div>
                    <p className="text-[14px]">Ro‘yxatdan o‘tish tugmasini bosgach foydalanish <span className="text-(--blue)">shartlari va qoidalarini</span> qabul qilaman</p>
                </div>
            </div>

            <BottomMenu setStep={setStep} step={step} onClick={yubor} />
        </>
    )
}

export default SinginTel
