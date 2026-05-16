"use client"

import { useState } from "react"
import { steptype } from "../../LoginMain"
import BottomMenu from "../../shared/BottomMenu"
import MenuTop from "../../shared/MenuTop"
import { NextTo } from "../../shared/utills/NextTo"

const ReEmail = ({ setStep, step }: { step: steptype, setStep: (promp: steptype) => void }) => {



    return (
        <>
            <MenuTop setStep={setStep} step={step} />

            <div className="w-full h-auto p-6 grid content-start gap-6">
                <div>
                    <p className="text15">Elektron pochta</p>
                    <input type="text" className="logininput" placeholder="example@gmail.com" />
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

export default ReEmail