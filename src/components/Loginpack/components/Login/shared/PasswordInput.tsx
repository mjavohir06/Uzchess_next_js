"use client"

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const PasswordInput = ({password,setPassword,placeholder="Parolingizni kiriting"}:{password:string,setPassword:(promp:string)=>void,placeholder?:string}) => {
    const [isShow,setShow]=useState(false)
  return (
    <div className="w-full h-11 bg-[#13181C] border border-[#36393B] rounded-lg overflow-clip focus-within:border-white flex items-center">
      <input type={isShow?"text":"password"} value={password} onChange={e=>setPassword(e.target.value)} className="w-[90%] h-full pl-4 outline-0" placeholder={placeholder}/>
      <div className="h-full w-[10%] flex items-center justify-center" onClick={()=>setShow(p=>!p)}>
        {
            isShow ? 
            <Eye size={24} color="#F7F9FA"/>:
            <EyeOff size={24} color="#F7F9FA"/>
        }
      </div>
    </div>
  )
}

export default PasswordInput
