"use client"

import { useState } from "react"
import SingupTel from "./Sinup/Tel/SingupTel"
import SinupEmail from "./Sinup/Email/SinupEmail"
import SinginEmail from "./Singin/Email/SingInEmail"
import SinginTel from "./Singin/Tel/SinginTel"
import ReEmail from "./RePassword/Email/ReEmail"
import ReTel from "./RePassword/Tel/ReTel"
import CheckCode from "./Sinup/Umumiy/CheckCode"
import { LoginContext, LoginType } from "./LoginContext"
import PasswordPlase from "./Sinup/Umumiy/PasswordPlase"

export interface steptype {
  type: "singuptel" | "singupemail" | "singintel" | "singinemail" | "retel" | "reemail" | "warming"
  step: number
}

const LoginMain = ({ step, setStep,setOpen }: { step: steptype, setStep: (promp: steptype) => void ,setOpen:(promp:boolean)=>void}) => {

  const [login, setLogin] = useState<LoginType>({ loginType: "number" })

  return (
    <LoginContext.Provider value={{login,setLogin}}>
      <div className="w-full h-full grid content-between grid-cols-[auto,1fr,auto]">
        {/* Sing up */}
        {step.type == "singuptel" && step.step == 0 && <SingupTel setStep={setStep} step={step} />}
        {step.type == "singupemail" && step.step == 0 && <SinupEmail setStep={setStep} step={step} />}

        {step.step == 1 && <CheckCode setStep={setStep} step={step} />}

        {/* Sing in */}
        {step.type == "singinemail" && <SinginEmail setStep={setStep} step={step} setOpen={setOpen}/>}
        {step.type == "singintel" && <SinginTel setStep={setStep} step={step} setOpen={setOpen}/>}

        {/* Parolni qayta tiklash */}
        {step.type == "reemail" && step.step == 0 && <ReEmail setStep={setStep} step={step} />}
        {step.type == "retel" && step.step == 0 && <ReTel setStep={setStep} step={step} />}

        {/* Parol qo'yish */}

        {step.step==2 && <PasswordPlase setStep={setStep} step={step} setOpen={setOpen}/>}
      </div>
    </LoginContext.Provider>
  )
}

export default LoginMain
