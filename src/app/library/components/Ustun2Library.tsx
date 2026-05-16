"use client"
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'

const Ustun2Library = () => {
  const [search, setSearch] = useState("")
    const router=useRouter()
    const [page,setPage]=useState(1)
    

    function searchChange(e:ChangeEvent<HTMLInputElement, HTMLInputElement>){
        const title=e.target.value
        setSearch(title)
        if(title.length>0){
            router.replace(`/library?title=${title}&page=${page}`)
        }else{
            router.replace(`/library?page=${page}`)
        }
        setPage(1)
        
    }
    return (
        <div className="ustun2">
            <article className="h-13 border border-[#232627] focus-within:border-white flex items-center pl-4 pr-4 overflow-clip">
                <Search size={24} color="#F7F9FA" />
                <input type="text" value={search} onChange={searchChange} placeholder="Izlash" className="w-[90%] outline-0 h-full pl-2" />
                {
                    search.length>0 &&
                    <X size={24} color="#fff" onClick={()=>setSearch("")} className="ml-4"/>
                }
            </article>
            
        </div>
    )
}

export default Ustun2Library
