"use client"

import React, { useContext, useEffect, useRef, useState } from 'react'
import { steptype } from '../../LoginMain'
import BackTo from '../../shared/BackTo'
import { LoginContext } from '../../LoginContext'
import { PenBox, RefreshCcw } from 'lucide-react'
import clsx from 'clsx'
import { fetcher } from '@/lib/utills/FetchRes'

const CheckCode = ({ setStep, step }: { step: steptype, setStep: (promp: steptype) => void }) => {

    const ctx = useContext(LoginContext)
    const Refs = useRef([
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
    ])
    const [time, setTime] = useState(59)
    const [xato,setXato]=useState(false)

    function TimeStart() {
        setTime(59);
        const tms = setInterval(() => {
            setTime((p) => {

                if (p <= 1) {
                    clearInterval(tms);
                    return 0;
                }

                return p - 1;
            });
        }, 1000);
    }
    useEffect(() => {
        TimeStart()
    }, [])


    if (!ctx) return <></>
    const { login, setLogin } = ctx

    function formattel(value: string | undefined) {
        if (!value) return ""
        const tel = value.split("+998")[1]
        let format = "+998 "

        format += tel.slice(0, 2) + " "
        format += tel.slice(2, 5) + " "
        format += tel.slice(5, 7) + " "
        format += tel.slice(7, 9)
        return format
    }



    const loginlogin = login.loginType == "email" ? login.login :
        formattel(login.login)

    function changeinp(i: number, e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        if (!Refs.current[i].current) return
        const value = e.target.value
        const val: number[] = []

        if (!value || value == "") e.target.value = ""

        setXato(false)

        if (value.length > 1) {
            Refs.current[i].current.value = value.slice(0, 1)

            if (i < 5 && Refs.current[i + 1].current) {
                //@ts-ignore
                Refs.current[i + 1].current.value = value.slice(1, 2)
                Refs.current[i + 1].current?.focus()
            }
        }


        for (let r of Refs.current) {
            if (!r.current) return
            if (r.current.value && r.current.value.length > 0 && val.length <= 6) {
                val.push(Number(r.current.value))
                r.current.value = ""
            }
        }
        let i2 = 0
        for (let r of Refs.current) {
            if (!r.current) return

            if (val[i2]!==undefined) {
                r.current.value = val[i2].toString()

                i2++
            }
            if (Refs.current[i2 - 1] && Refs.current[i2 - 1].current) Refs.current[i2 - 1].current?.focus()
        }
    }

    function orqaga() {
        setStep({type:step.type,step:0})
    }

    

    async function Tasdiqlash() {
        let kod=""
        for(let r of Refs.current) kod+=r.current?.value

        if(kod.length!==6) setXato(true)
        const res=await fetcher.post(`auth/verify-otp`,{login:login.login,code:kod})
        if(res.status!==201) return
        setLogin(p=>{return{...p,code:kod}})
        setStep({type:step.type,step:2})
    }

    return (
        <>
            <BackTo setStep={setStep} step={step} />
            <div className='w-full p-6 h-full mb-20'>
                <div>
                    <p className='text-[20px]'>
                        {step.type.endsWith("tel") && "Tasdiqlash uchun maxsus kod quyidagi raqamga yuborildi "}
                        {step.type.endsWith("email") && "Tasdiqlash uchun maxsus kod elektron pochtaga yuborildi "}
                    </p>
                </div>

                <div className='h-10 w-max rounded-lg mt-5 flex items-center p-1 gap-2 bg-[#13181C] border border-[#F7F9FA0A]'>
                    <div>
                        <p>{loginlogin}</p>
                    </div>
                    <div className='w-8 h-full flex items-center justify-center bg-[#F7F9FA1A] rounded-lg' onClick={orqaga}>
                        <PenBox size={20} color='#fff' />
                    </div>

                </div>

                <div className='mt-8'>
                    <p className='text-[15px]'>Maxsus kodni kiriting</p>
                    <div className='w-full flex gap-4'>
                        {
                            Refs.current.map((e, i) => <input key={i} max={9} type='number' onChange={e => changeinp(i, e)} ref={e} 
                                className={clsx('h-11 w-12.5 outline-0  hover:border-[#6f7071] focus:border-white grow bg-[#13181C] border border-[#36393B] rounded-lg pl-4',{
                                    "border-red-700":xato
                                })} />)
                        }
                    </div>
                </div>
                <div className='w-full flex gap-2 items-center mt-6'>
                    <p >Qayta yuborish:</p>
                    <div className={clsx("p-[4px_8px]", { "bg-[#82CC2714]": time < 60, "text-[#E0B53114]": time < 30 })}>
                        {
                            time !== 0 ?
                                <p className={clsx("", { "text-[#82CC27]": time < 60, "text-[#E0B531]": time < 30 })}>00:{time > 9 ? time : `0${time}`}</p> :
                                <RefreshCcw size={24} color='#fff' onClick={TimeStart}/>
                        }
                    </div>
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

export default CheckCode
