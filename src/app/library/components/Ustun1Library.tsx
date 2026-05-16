"use client"
import Select from '@/components/mini/Select'
import clsx from 'clsx'
import StarIcon from "@/assets/star.svg"
import Image from 'next/image'
import React, { useState } from 'react'

const Ustun1Library = () => {
  const [reyting,setreyting]=useState(0)

    function tozala(){
        setreyting(0)
    }

    return (
        <div className="ustun1">
            <article className="h-25 border border-(--grey) flex items-center justify-center gap-3">
                <Image src={"/Kutubxona/book.svg"} alt="kurs" width={50} height={50} className="w-11 h-11 drop-shadow-[0px_0px_10px] drop-shadow-[#1C92E0]" />
                <p className="text-[32px]">Kutubxona</p>
            </article>
            <article className="grid p-5 gap-6">
                <div className="flex justify-between items-center">
                    <p className="text-[18px]">Filter</p>
                    <p className="text-[18px] text-(--blue) cursor-pointer" onClick={tozala}>Tozalash</p>
                </div>
                <div className="grid gap-4">
                    <p className="text12">Tilni tanlang:</p>
                    <Select items={["Barchasi","O'zbekcha","Ruscha","Inglizcha"]} valueIndex={0} setValueIndex={(p) => { }} />
                </div>
                <div className="grid gap-4">
                    <p className="text12">Darajani tanlang:</p>
                    <Select items={["Barchasi"]} valueIndex={0} setValueIndex={(p) => { }} />
                </div>
                <div className="grid gap-4">
                    <p className="text12">Kategoriya:</p>
                    <Select items={["Barchasi"]} valueIndex={0} setValueIndex={(p) => { }} />
                </div>
                <div className="grid gap-4">
                    <p className="text12">Reyting:</p>
                    <div className="w-full h-14 flex gap-4 bg-[#15181A] border border-[#232627] items-center justify-center">
                        <StarIcon onClick={()=>setreyting(1)} className={clsx("w-10",{
                            "text-[#232627]":reyting<=0
                        })}/>
                        <StarIcon onClick={()=>setreyting(2)} className={clsx("w-10",{
                            "text-[#232627]":reyting<=1
                        })}/>
                        <StarIcon onClick={()=>setreyting(3)} className={clsx("w-10",{
                            "text-[#232627]":reyting<=2
                        })}/>
                        <StarIcon onClick={()=>setreyting(4)} className={clsx("w-10",{
                            "text-[#232627]":reyting<=3
                        })}/>
                        <StarIcon onClick={()=>setreyting(5)} className={clsx("w-10 ",{
                            "text-[#232627]":reyting<=4
                        })}/>
                    </div>
                </div>
            </article>

        </div>
    )
}

export default Ustun1Library
