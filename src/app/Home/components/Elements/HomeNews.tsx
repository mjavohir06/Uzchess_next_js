import Title from '@/components/mini/Title'
import { fetcher } from '@/lib/utills/FetchRes'
import { News } from '@/types/news'
import React from 'react'
import HomeNewsItem from './HomeNewsItem'
import { PaginatedResultType } from '@/types/PaginatedResult'

const HomeNews =async () => {
    const news=await fetcher.get<PaginatedResultType<News[]>>("/public/news?size=4")
    console.log(news);
    
    return (
        <div>
            <Title title='Yangiliklar' url='/news' padding={0}/>
            {
                news.data.data.map((e,i)=><HomeNewsItem news={e} key={i}/>)
            }

        </div>
    )
}

export default HomeNews
