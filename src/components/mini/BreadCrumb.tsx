import Image from "next/image"
import Link from "next/link"

interface Items {
    title: string
    url?: string
}



interface Promp {
    item: Items[]
}


const BreadCrumb = ({ item }: Promp) => {
    return (
        <div className="flex h-11 gap-2 pl-5">
            <div className="flex gap-2 items-center">
                <Image src={"/Breadcrumb/home 1.svg"} alt="Bread" width={20} height={20} />
                <Link href={"/"} className="text14">Asosiy</Link>
            </div>
            {
                item.map((e, i) => {
                    if(i+1<item.length)   return (
                        <div key={i} className="flex gap-2 items-center">
                            <Image src={"/Breadcrumb/Union.svg"} alt="icon" width={4} height={6} />
                            <Link  href={e.url??"/"} className="text-[14px] text-[#888888] line-clamp-1 max-w-50">{e.title}</Link>
                        </div>
                    )
                    else{return(
                        <div key={i} className="flex gap-2 items-center ">
                            <Image src={"/Breadcrumb/Union.svg"} alt="icon" width={4} height={6} />
                            <p className="text-[14px] font-medium line-clamp-1 max-w-50">{e.title}</p>
                        </div>
                        )
                    }
                })
            }

        </div>
    )
}

export default BreadCrumb
