import Image from 'next/image'
import React from 'react'

const HomeBarMenu = ({label,img}:{label:string,img:string}) => {
  return (
    <div className='h-27 w-81.5 rounded-lg border border-[#1C92E029] bg-[#13181C] flex items-center justify-center gap-4'>
      <Image src={img} alt='icon' width={44} height={44} className='w-11 h-11'/>
      <p className='text-[20px] text-white font-bold'>{label}</p>
    </div>
  )
}

export default HomeBarMenu
