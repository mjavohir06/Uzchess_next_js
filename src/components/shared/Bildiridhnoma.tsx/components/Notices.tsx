"use client"
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronDown } from "lucide-react"

interface TypeNotice {
    img: string
    title: string
    text: string
    isread: boolean
}



const Notices = ({ e }: { e: TypeNotice }) => {

    const [isopen, setopen] = useState(false)


    return (
        <div className={clsx("w-full grid gap-3 h-auto p-4 rounded-lg border bg-[#111315]", {
            "border-[#1C92E0]": !e.isread,
            "border-transparent": e.isread
        })}>
            <div className="w-full h-auto rounded-lg overflow-clip">
                <Image src={e.img} alt="bildirishnoma" width={400} height={400} className="w-full" />
            </div>
            <div className="w-full">
                <p className="text-[20px]">{e.title}</p>
                {
                    isopen &&

                    <p className='text-[18px] text-[#C2C4C5]'>{e.text}</p>
                }
            </div>

            <div className='w-full flex justify-center items-center'>
                <nav className='flex items-center gap-1' onClick={() => {setopen(p => !p);e.isread=true}}>
                    {
                        !isopen ?
                            <p className='text-[#1C92E0] text-[16px]'>Batafsil</p> :
                            <p className='text-[#164B6F] text-[16px]'>Yopish</p>
                    }
                    <ChevronDown size={20} className={clsx({
                        "rotate-180": isopen
                    })} />
                </nav>
            </div>
        </div>
    )
}

export default Notices
