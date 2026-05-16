"use client"

import { KursType } from "@/types/Kurslar"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import KursItem from "./Elements/KursItem"
import { PaginatedResultType } from "@/types/PaginatedResult"

const Ustun2Kurs = ({ kurslar, status }: { kurslar: PaginatedResultType<KursType[] | undefined>, status: number }) => {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const [page, setPage] = useState(1)
    const [courses, SetCourses] = useState(kurslar.data)
    console.log(kurslar);
    if (!kurslar.data) {
        router.replace("/courses?page=" + page)
        
    }
    useEffect(() => {
        console.log(status);

        if (status !== 200) return router.replace("/courses?page=" + page)
        SetCourses(kurslar.data)
        if (kurslar.currentPage) setPage(kurslar.currentPage)

    }, [kurslar, status])


    function searchChange(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        const title = e.target.value
        setSearch(title)
        if (title.length > 0) {
            router.replace(`/courses?search=${title}&page=${page}`)
        } else {
            router.replace(`/courses?page=${page}`)
        }
    }
    return (
        <div className="ustun2">
            <article className="h-13 border border-[#232627] focus-within:border-white flex items-center pl-4 pr-4 overflow-clip">
                <Search size={24} color="#F7F9FA" />
                <input type="text" value={search} onChange={searchChange} placeholder="Izlash" className="w-[90%] outline-0 h-full pl-2" />
                {
                    search.length > 0 &&
                    <X size={24} color="#fff" onClick={() => setSearch("")} className="ml-4" />
                }
            </article>
            {   courses&&
                courses.map((e, i) => <KursItem kurs={e} key={i} search={search} />)
            }

        </div>
    )
}

export default Ustun2Kurs
