"use client"
import BreadCrumb from '@/components/mini/BreadCrumb'
import { News } from '@/types/news'
import { Search } from 'lucide-react'
import React from 'react'
import NewsItem from './NewsItem'
import Yoshlarportali from '@/components/repeated/Yoshlarportali'
import TopKitoblar from '@/components/repeated/TopKitoblar'
import Select from '@/components/mini/Select'

const NewMain = ({news}:{news:News[]}) => {
  return (
    <>
        <BreadCrumb item={[{title:"Yangiliklar"}]}/>
        <section className="container2 ">
            <article className="ustun12">
                <div className="flex justify-between items-center">
                    <p className="title32">Yangiliklar</p>
                    <search className="flex w-81.5 h-13 border bg-[#15181A] border-[#232627] items-center pl-4 rounded-lg overflow-clip focus-within:border-white">
                        <Search size={24} color="#f7f9fa83"/>
                        <input type="text" placeholder="Izlash" className="pl-1.5 h-full w-full outline-0 text-white"/>
                    </search>
                </div>
                <div className="w-full grid justify-items-center grid-cols-1 md:grid-cols-2 md:w-169 lg:grid-cols-[repeat(3,20.375rem)] lg:w-256.5 gap-6">
                    {news.map((newsItem: News) => <NewsItem key={newsItem.id} news={newsItem} />)}
                </div>
            </article>
            <article className="ustun3">
                <Yoshlarportali/>
                <TopKitoblar/>
            </article>

        </section>
    </>
  )
}

export default NewMain
