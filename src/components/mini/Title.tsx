"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

/**Title
 * 
 * @param title title 
 * @param url link, o'tishi kerak bo'lgan joy
 * @param to link matni default Barchasi 
 * @param padding beriladigan o'ng va chap tomondan padding default 4 (16px)
 * @returns 
 */

const Title = ({title,url,to="Barchasi",padding=4}:{title:string,url:string,to?:string,padding?:number}) => {
  return (
    <div className={`flex w-full pl-${padding} pr-${padding}  items-center justify-between`}>
      <p className="text-[18px] text-[#FCFCFC]">{title}</p>
      <Link href={url} className="flex items-center gap-0.5">
        <p className="text-[16px] text-[#9DA1A3]">{to}</p>
        <ChevronRight size={20} color="#9DA1A3"/>
      </Link>
    </div>
  )
}

export default Title
