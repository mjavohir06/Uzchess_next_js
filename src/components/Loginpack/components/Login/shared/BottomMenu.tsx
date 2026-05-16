"use client"

import { steptype } from "../LoginMain"


const BottomMenu = ({ setStep, step,onClick }: { step: steptype, setStep: (promp: steptype) => void, onClick:()=>void }) => {

    function chnagestep(type: "up" | "in") {
        if (type == "up") {
            if (step.type == "singintel") setStep({ step: step.step, type: "singuptel" })
            if (step.type == "singinemail") setStep({ step: step.step, type: "singupemail" })
        } else {
            if (step.type == "singuptel") setStep({ step: step.step, type: "singintel" })
            if (step.type == "singupemail") setStep({ step: step.step, type: "singinemail" })
        }

    }

    

    return (
        <div className="w-full p-6 grid h-auto content-start gap-y-3.5">
            {
                step.type.startsWith("singup")?
                <div className="w-full h-11 rounded-lg bg-(--blue) flex items-center justify-center" onClick={onClick}><p>Ro‘yxatdan o‘tish</p></div>:
                <div className="w-full h-11 rounded-lg bg-(--blue) flex items-center justify-center" onClick={onClick}><p>Kirish</p></div>
            }
            <div className="flex items-center justify-between">
                <div className="w-45 h-px bg-[#D9D9D91A] "></div>
                <div><p className="text-[14px]">yoki</p></div>
                <div className="w-45 h-px bg-[#D9D9D91A] "></div>
            </div>
            {
                step.type.startsWith("singin")?
                <div className="w-full h-11 rounded-lg bg-[#F7F9FA1A] flex items-center justify-center" onClick={()=>chnagestep("up")}><p>Ro‘yxatdan o‘tish</p></div>:
                <div className="w-full h-11 rounded-lg bg-[#F7F9FA1A] flex items-center justify-center" onClick={()=>chnagestep("in")}><p>Kirish</p></div>
            }
        </div>
    )
}

export default BottomMenu
