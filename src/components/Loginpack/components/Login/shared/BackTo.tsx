"use client"

import clsx from "clsx"
import { steptype } from "../LoginMain"
import { ChevronLeft } from "lucide-react"

const BackTo = ({ setStep, step }: { step: steptype, setStep: (promp: steptype) => void }) => {

    function back() {
        if (step.step <= 0) return
        setStep({ type: step.type, step: (step.step - 1) })
    }

    return (
        <div className="w-full h-25 border-b border-b-[#F7F9FA14] p-6 flex gap-4 items-center">
            <div className="w-8 h-13 rounded-[8px_0px_0px_8px] bg-[#1E262A] flex items-center justify-center" onClick={back}>
                <ChevronLeft size={24} color="#fff" />
            </div>
            <p className="text-[20px] font-bold">
                {step.type.startsWith("re") && step.step==1 && "Parolni qayta tiklash"}
                {step.type == "singuptel"  && step.step==1 && "Telefon raqamni tasdiqlash"}
                {step.type == "singupemail" && step.step==1  && "Elektron pochtani tasdiqlash"}
                {step.step==2 && step.type.startsWith("singup") && "Parol qo‘yish"}
                {step.step==2 && step.type.startsWith("re") && "Parolni qayta tiklash"}
            </p>
        </div>
    )
}

export default BackTo
