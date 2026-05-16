"use client"
import clsx from 'clsx'
import { X } from 'lucide-react'
import Image from 'next/image'
import LeftSide from './components/LeftSide'
import LoginMain, { steptype } from './components/Login/LoginMain'
import { useEffect, useState } from 'react'
import LoginWarming from './components/Warming/LoginWarming'

const LoginWiev = ({type,open,setopen}:{
    type:"login"|"warming",
    open:boolean,
    setopen:(promp:boolean)=>void
}) => {

    const [step,setStep]=useState<steptype>({type:"singuptel",step:0})
    useEffect(()=>{
        if(type=="warming")  setStep({type:"warming",step:0})
    },[])

  return (
    <div className={clsx("fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-30 bg-[#000000de] ",{"hidden":!open})} onClick={()=>setopen(false)}>
        <div className='relative w-227.5 h-150 bg-(--dark) border border-(--stroke) rounded-xl flex' onClick={e=>e.stopPropagation()}>
            <div className='w-[50%] h-full overflow-clip'>
                {step.type=="warming"? <LoginWarming step={step} setStep={setStep}/>: <LoginMain step={step} setStep={setStep} setOpen={setopen}/>}
            </div>
            <div className='w-[50%] h-full bg-[linear-gradient(45deg,#1485d0,#1C92E0,#171717d8,#171717e8,#1C92E0,#1485d0,#107dc6)] grid content-between pt-8 pb-12  pl-8 justify-self-start overflow-clip relative'>
                <LeftSide/>
            </div>
            <div className='absolute top-0 -right-13 w-10 h-10 rounded-lg flex items-center justify-center bg-(--dark)' onClick={()=>setopen(false)}><X size={24} color='#fff'/></div>
            <div className='absolute -top-18 left-[37%]'>
                <Image src={"/login/logo.png"} alt='logo' width={200} height={60}/>
            </div>
            
        </div>
      
    </div>
  )
}

export default LoginWiev
