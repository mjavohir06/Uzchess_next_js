
import {Phone,} from "lucide-react"

const infoarr=[
    {
        title:"Ish vaqti",
        Icon:Phone,
        text:"Dushanba-Juma 9:00-18:00"
    },
    {
        title:"Ish vaqti",
        Icon:Phone,
        text:"Dushanba-Juma 9:00-18:00"
    },
    {
        title:"Ish vaqti",
        Icon:Phone,
        text:"Dushanba-Juma 9:00-18:00"
    },
    {
        title:"Ish vaqti",
        Icon:Phone,
        text:"Dushanba-Juma 9:00-18:00"
    },
    
]


const InfoConnect = () => {
  return (
    <div className="w-70 grid gap-5 content-start">
        {
            infoarr.map((e,i)=><div key={i} className="h-18 w-full p-4 pl-3 pr-3 flex gap-3">
                <div><e.Icon size={28} color="#1C92E0"/></div>
                <div>
                    <p className="text-[14px] text-[#9DA1A3]">{e.title}</p>
                    <p className="text-[16px]">{e.text}</p>
                </div>
            </div>)
        }
      
    </div>
  )
}

export default InfoConnect
