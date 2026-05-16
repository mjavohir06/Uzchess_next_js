import React from 'react'
import { steptype } from '../Login/LoginMain'
import Image from 'next/image'

const LoginWarming = ({step,setStep}:{step:steptype,setStep:(promp:steptype)=>void}) => {
  return (
    <div className='w-full h-full p-6 grid content-between'>
        <div className='w-full h-auto flex justify-center items-center mt-10'>
            <Image src={"/login/qulf.png"} alt='rasm' width={295} height={224}/>
        </div>
        <div className='grid gap-3 content-start pl-6.5 pr-6.5 text-center'>
            <p className='text-[20px]'>UzChess platformasidan to‘liq foydalanish uchun tizimga kiring</p>
            <p className='text-[#9DA1A3]'>Platformaning barcha imkoniyatlaridan foydalanish uchun tizimga kirishingiz kerak</p>
        </div>

        <div className='grid gap-4 content-start'>
            <div className="w-full h-11 rounded-lg bg-(--blue) flex items-center justify-center" onClick={()=>setStep({step:0,type:"singintel"})}><p>Kirish</p></div>
            <div className="w-full h-11 rounded-lg bg-[#F7F9FA1A] flex items-center justify-center" onClick={()=>setStep({step:0,type:"singuptel"})}><p>Ro‘yxatdan o‘tish</p></div>
            
        </div>
      
    </div>
  )
}

export default LoginWarming
