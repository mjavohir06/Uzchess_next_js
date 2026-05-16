"use client"

import { useState } from "react"
import { steptype } from "../../LoginMain"
import BottomMenu from "../../shared/BottomMenu"
import MenuTop from "../../shared/MenuTop"
import TelInput from "../../shared/TelInput"
import { NextTo } from "../../shared/utills/NextTo"

const ReTel = ({ setStep, step }: { step: steptype, setStep: (promp: steptype) => void }) => {

    const [tel, setTel] = useState("")



    return (
        <>
            <MenuTop setStep={setStep} step={step} />
            <div className="w-full h-auto p-6 grid content-start gap-6">

                <div>
                    <p className="text15">Telefon raqam</p>
                    <TelInput setTel={setTel} tel={tel} />
                </div>

                <div className="h-51"></div>
            </div>

            <div className="p-6">
                <div className="w-full h-11 flex items-center rounded-lg bg-(--blue) justify-center" onClick={()=>NextTo(step,setStep)}>
                    <p className="font-bold">Davom etish</p>
                </div>

            </div>
        </>
    )
}

export default ReTel
