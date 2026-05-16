"use client"
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'



const Select = ({ padding = 16,border=1,isbg=true, items, valueIndex, setValueIndex }
    : {
        padding?: number
        border?:number,
        isbg?:boolean
        items: string[]
        valueIndex: number,
        setValueIndex: (promp: number) => void
    }) => {
    const [open, setopen] = useState(false)
    const ref = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setopen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);




    return (
        <div ref={ref} className={clsx(`w-full h-13.5 flex-1 relative rounded-md  ${"border-"+border} border-[#232627] pr-${padding / 4} pl-${padding / 4} flex justify-between items-center `,{
            "bg-[#15181A]":isbg
        })}>
            <p>{items[valueIndex]}</p>
            <ChevronDown className={clsx({
                "rotate-180":open
            })} onClick={()=>setopen(t=>!t)}/>
            {open &&
                <div className='absolute w-full h-2 -bottom-4 left-0 z-10'>
                    <ul className={` rounded-md bg-[#0f0f0f] border border-(--stroke)  min-w-40.5c w-full overflow-clip `}>
                        {
                            items.map((e:string, i:number) => <li key={i} className={"px-4 py-3 hover:bg-[#ffffff22]"} onClick={() => {setValueIndex(i);setopen(false)}}>{e}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Select
