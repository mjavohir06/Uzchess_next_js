"use client"

import clsx from "clsx"
import { steptype } from "../LoginMain"
import { ChevronLeft } from "lucide-react"

const MenuTop = ({ setStep, step }: { step: steptype, setStep: (promp: steptype) => void }) => {

    function chnagestep(type: "email" | "tel") {
        if (type == "email") {
            if (step.type == "singintel") setStep({ step: step.step, type: "singinemail" })
            if (step.type == "singuptel") setStep({ step: step.step, type: "singupemail" })
            if (step.type == "retel") setStep({ step: step.step, type: "reemail" })
        } else {
            if (step.type == "singinemail") setStep({ step: step.step, type: "singintel" })
            if (step.type == "singupemail") setStep({ step: step.step, type: "singuptel" })
            if (step.type == "reemail") setStep({ step: step.step, type: "retel" })
        }
        console.log(step);

    }

    function back(){
        if(step.type.endsWith("tel")) return setStep({step:0,type:"singintel"})
        if(step.type.endsWith("email")) return setStep({step:0,type:"singinemail"})
    }

    return (
        <div className="w-full h-auto content-start border-b border-b-[#F7F9FA14] p-6 grid gap-5">
            <div className="flex items-center gap-4">
                {
                    step.type.startsWith("re") &&
                    <div className="w-8 h-13 rounded-[8px_0px_0px_8px] bg-[#1E262A] flex items-center justify-center" onClick={back}>
                        <ChevronLeft size={24} color="#fff" />
                    </div>
                }

                <p className="text-[20px] font-bold">
                    {step.type.startsWith("singup") && "Ro'yhatdan o'tish"}
                    {step.type.startsWith("singin") && "Tizimga kirish"}
                    {step.type.startsWith("re") && "Parolni tiklash"}
                </p>
            </div>
            <div className="w-full h-11 bg-[#13181C] flex items-center p-1 rounded-lg">
                <div className={clsx("w-[50%] h-full rounded-lg flex items-center justify-center", {
                    "bg-[#323639]": step.type.endsWith("tel")
                })} onClick={() => chnagestep("tel")}>
                    <p className={clsx("text-[15px]", { "text-[#F7F9FA66]": !step.type.endsWith("tel") })}>Telefon raqam orqali</p>
                </div>


                <div className={clsx("w-[50%] h-full rounded-lg flex items-center justify-center", {
                    "bg-[#323639]": step.type.endsWith("email")
                })} onClick={() => chnagestep("email")}>
                    <p className={clsx("text-[15px]", { "text-[#F7F9FA66]": !step.type.endsWith("email") })}>E-mail orqali</p>
                </div>

            </div>
        </div>
    )
}

export default MenuTop
