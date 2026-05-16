"use client"

import { highlightText } from "@/lib/utills/HighLighted"
import { KursType } from "@/types/Kurslar"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const KursItem = ({kurs,search}:{kurs:KursType,search:string}) => {

  const newprice=kurs.newPrice ?
    `${kurs.newPrice.toLocaleString("ru-RU")}.00 uzs`:
    undefined
  
  const oldprice=`${kurs.price.toLocaleString("ru-Ru")}.00 uzs`

  const [heart,setHeart]=useState(kurs.isLiked)

  return (
    <article className="h-47.5 border border-(--grey) p-6 flex gap-5 hover:border-(--blue) hover:text-(--blue) cursor-pointer relative">
      <div className="h-full w-46.25 overflow-clip rounded-md border border-[#F7F9FA14] bg-[#13181C] justify-center flex relative ">
        <Image src={kurs.image} alt="img" width={200} height={300} className="h-full"/>
        <div className="absolute flex gap-1 left-2 top-2 items-center p-1 bg-[#0B141899] border border-[#F7F9FA29] rounded-md backdrop-blur-2xl">
          <Star size={16} fill="#E0B531" color="transparent"/>
          <p className="text-[14px] text-white">{kurs.rating}</p>
        </div>
         <div className="absolute flex gap-1 left-2 bottom-2 items-center p-1 bg-[#0B141899] border border-[#F7F9FA29] rounded-md backdrop-blur-2xl">
          <p className="text-[12px] text-white">{kurs.language.code.toLocaleUpperCase()}</p>
        </div>
      </div>
      <div className="grid content-between">
        <div>
          <p className="text-[20px]">{highlightText(kurs.title,search)}</p>
          <p className="text-[14px] text-[#F7F9FA99]">{kurs.author.name}</p>
        </div>
        <div>
          {
            newprice && <p className="text-[12px] text-[#F7F9FA99] line-through decoration-red-500">{oldprice}</p>
          }
          <p className="text-[#82CC27]">{newprice??oldprice}</p>

        </div>
        <div className="flex gap-3">
          <div className="flex pr-3 gap-0.5 border-r border-r-[#3D4549] items-center">
            <Image src={kurs.difficulty.icon} alt="icon" width={40} height={40} className="w-6 h-6"/>
            <p className="text-[14px] text-[#F7F9FA99]">{kurs.difficulty.title}</p>
          </div>
          <div className="flex pr-3 gap-0.5 border-r border-r-[#3D4549] items-center">
            <Image src={"/Kurslar/cap2.svg"} alt="icon" width={40} height={40} className="w-6 h-6"/>
            <p className="text-[14px] text-[#F7F9FA99]">20 ta bo'lim</p>
          </div>
          <div className="flex pr-3 gap-0.5 items-center">
            <Image src={"/Kurslar/category.svg"} alt="icon" width={40} height={40} className="w-6 h-6"/>
            <p className="text-[14px] text-[#F7F9FA99]">{kurs.category.name}</p>
          </div>
          <div className="absolute bottom-6 right-6">
            <Heart size={24} fill={heart?"red":"transparent"} color={heart?"red":"#fff"} onClick={(e)=>{e.stopPropagation();setHeart(p=>!p)}}/>
          </div>
        </div>
      </div>
      
    </article>
  )
}

export default KursItem
