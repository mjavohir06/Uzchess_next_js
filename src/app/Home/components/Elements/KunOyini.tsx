"use client"

import Title from "@/components/mini/Title"
import { Play } from "lucide-react"
import Image from "next/image"

const KunOyini = () => {
  return (
    <article className="h-77.5">
      <div className="bg-[#272B30] pb-4 pt-4">
        <Title title="Kun o'yini" url="/live" to="Ko'rish" />
      </div>
      <div className="w-full h-46 flex items-center justify-center relative">
        <Image src={"https://i.ytimg.com/vi/XVzobPFBiFg/maxresdefault.jpg"} alt="live" width={326} height={300}/>
        <Play size={56} className="absolute " fill="#fff" color="transparent"/>
        <div className="absolute bottom-0 left-0 w-full h-11 bg-[#1A1D1F66] border-t border-t-[#FFFFFF33] backdrop-blur-sm flex pl-4 pr-4 items-center justify-between">
          <div>
            <p className="text-[14px]">5:30</p>
          </div>
          <div className="flex items-center">

            <p className="text-(--green) ">Bullet</p>
          </div>
        </div>
      </div>

    </article>
  )
}

export default KunOyini
