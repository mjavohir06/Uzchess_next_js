import DateUzFormat from '@/lib/utills/DateUzFormatter'
import { News } from '@/types/news'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HomeNewsItem = ({ news }: { news: News }) => {
    return (
        <Link href={`/news/${news.id}`} className='flex h-35 w-full gap-4 p-[20px_0]  border-b border-[#272B30] group relative'>
            <div className='rounded-lg overflow-clip items-center justify-center bg-[#FFFFFF]'>
                <Image src={news.image} alt='image' width={180} height={120} className='h-30' />
            </div>
            <div className='grid gap-2 content-start items-start'>
                <p className='text-[14px] text-white'>{DateUzFormat(news.date)}</p>
                <p className='text-[16px] text-white line-clamp-2'>{news.title}</p>
                <p className='text-[14px] text-[#888888] line-clamp-2'>{news.content}</p>
                <ArrowRight size={24} color='#1C92E0' className='group-hover:block hidden absolute top-5 right-0'/>
            </div>

        </Link>
    )
}

export default HomeNewsItem
