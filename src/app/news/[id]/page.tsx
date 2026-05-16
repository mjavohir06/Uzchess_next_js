// 'use client'
import BreadCrumb from '@/components/mini/BreadCrumb'
import { getOneNew } from '@/lib/api/news'
import DateUzFormat from '@/lib/utills/DateUzFormatter'
import { Eye, Share2, Twitter, Youtube, X, Facebook, Link2 } from 'lucide-react'
import Image from 'next/image'
import styles from "./style.module.css"
import LoyihaRivoji from '@/components/repeated/LoyihaRivoji'
import Yoshlarportali from '@/components/repeated/Yoshlarportali'
import Title from '@/components/mini/Title'
import NewsItem from '../components/NewsItem'
import { fetcher } from '@/lib/utills/FetchRes'
import { OneNews } from '@/types/news'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id

    // const news = await getOneNew(Number(id))
    const res = await fetcher.get( `public/news/${id}` )
    if (!res.data) return <></>
    const news = res.data as OneNews


    return (
        <>
            <BreadCrumb item={[{ title: "Yangiliklar", url: "/news" }, { title: `${news.title}` }]} />
            <section className='container2'>
                <div className="ustun12">
                    <article className='w-full p-5 h-auto grid gap-4 bg-[#1A1D1F] border border-[#1F272A] rounded-lg'>
                        <div className='grid gap-3'>
                            <p className='text-[28px]'>{news.title}</p>
                            <p className='text-[#F7F9FA66] text-[16px]'>{DateUzFormat(news.date)}</p>
                        </div>
                        <div>
                            <div className='w-full h-auto overflow-clip rounded-lg '>
                                <Image src={news.image} alt='news' width={1000} height={600} className='w-full' />
                            </div>
                            <div className='p-[38.5px] pt-0 pb-0'>
                                <div className='pb-6 border-b border-b-[#F7F9FA1A] pt-3'>
                                    <div dangerouslySetInnerHTML={{ __html: news.richText }} className={styles.content}>

                                    </div>
                                </div>
                                <div className='flex justify-between items-end h-15 '>
                                    <div className='flex gap-4'>
                                        <Twitter size={24} className='text-[#A5A5AA] hover:text-white' />
                                        <Facebook size={24} className='text-[#A5A5AA] hover:text-white' />
                                        <Image src={"/images/telegram.png"} alt='telegram' width={40} height={40} className='w-6 h-6 ' />
                                        <Link2 size={24} className='-rotate-45 text-[#A5A5AA] hover:text-white' />
                                    </div>
                                    <div className='flex gap-6'>
                                        <div className='flex gap-2 items-center'>
                                            <Eye size={24} className='text-[#A5A5AA] hover:text-white' />
                                            <p className=''>{news.views}</p>
                                        </div>
                                        <div className='flex gap-1 w-48 h-10 items-center justify-center bg-[#F7F9FA1A] rounded-lg'>
                                            <p>Ulashish</p>
                                            <Share2 size={20} color='#fff' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className='w-full'>
                        <Title title="O'xshash yangiliklar" url='/news' to='Barcha yangiliklar' padding={0} />
                        <div className='flex gap-6 pt-4'>
                            {
                                news.othernews.map((e, i) => <NewsItem key={i} news={e} />)
                            }
                        </div>
                    </div>

                </div>
                <div className="ustun3">
                    <LoyihaRivoji />
                    <Yoshlarportali />
                </div>
            </section>
        </>
    )
}
