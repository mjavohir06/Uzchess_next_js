"use client"

import { MainContext } from "@/app/Home/Main.Context"
import { fetcher } from "@/lib/utills/FetchRes"
import { highlightText } from "@/lib/utills/HighLighted"
import { BookType } from "@/types/Library"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

const BookItem = ({ book, search }: { book: BookType, search: string }) => {

  const newprice = book.newPrice ?
    `${book.newPrice.toLocaleString("ru-RU")}.00 uzs` :
    undefined

  const oldprice = `${book.price.toLocaleString("ru-Ru")}.00 uzs`

  const [heart, setHeart] = useState(book.isLiked)

  const ctx = useContext(MainContext)

  if (!ctx) return (
    <></>
  )

  const { isLogin, setLogin } = ctx


  async function clickheart() {
    // setHeart(p=>!p)
    const res = await fetcher.post<boolean>(`/public/book-like/${book.id}`)
    console.log(res);

    if (res.status == 401) return setLogin(true)

    if (res.status == 201) setHeart(res.data)
  }

  return (
    <Link href={`/library/${book.id}`} >
      <article className="h-54.25 border border-(--grey) p-6 flex gap-5 hover:border-(--blue) hover:text-(--blue) cursor-pointer relative">
        <div className="h-full w-33 overflow-clip rounded-md border border-[#F7F9FA14] bg-[#13181C] justify-center flex relative ">
          <Image src={book.image} alt="img" width={200} height={300} className="h-full" />
          <div className="absolute flex gap-1 left-2 top-2 items-center p-1 bg-[#0B141899] border border-[#F7F9FA29] rounded-md backdrop-blur-2xl">
            <Star size={16} fill="#E0B531" color="transparent" />
            <p className="text-[14px] text-white">{book.rating??0}</p>
          </div>
          <div className="absolute flex gap-1 left-2 bottom-2 items-center p-1 bg-[#0B141899] border border-[#F7F9FA29] rounded-md backdrop-blur-2xl">
            <p className="text-[12px] text-white">{book.language.code.toLocaleUpperCase()}</p>
          </div>
        </div>
        <div className="grid content-between">
          <div>
            <p className="text-[20px]">{highlightText(book.title, search)}</p>
            <p className="text-[14px] text-[#F7F9FA99]">{book.author.name}</p>
          </div>
          <div>
            {
              newprice && <p className="text-[12px] text-[#F7F9FA99] line-through decoration-red-500">{oldprice}</p>
            }
            <p className="text-[#82CC27]">{newprice ?? oldprice}</p>

          </div>
          <div className="flex gap-3">
            <div className="flex pr-3 gap-0.5 border-r border-r-[#3D4549] items-center">
              <Image src={book.difficulty.icon} alt="icon" width={40} height={40} className="w-6 h-6" />
              <p className="text-[14px] text-[#F7F9FA99]">{book.difficulty.title}</p>
            </div>
            <div className="flex pr-3 gap-0.5 border-r border-r-[#3D4549] items-center">
              <Image src={"/Kurslar/cap2.svg"} alt="icon" width={40} height={40} className="w-6 h-6" />
              <p className="text-[14px] text-[#F7F9FA99]">20 ta bo'lim</p>
            </div>
            <div className="flex pr-3 gap-0.5 items-center">
              <Image src={"/Kurslar/category.svg"} alt="icon" width={40} height={40} className="w-6 h-6" />
              <p className="text-[14px] text-[#F7F9FA99]">{book.category.name}</p>
            </div>


            <div className="absolute bottom-6 right-6">
              <Heart size={24} fill={heart ? "red" : "transparent"} color={heart ? "red" : "#fff"} onClick={(e) => { e.stopPropagation();e.preventDefault(); clickheart() }} />
            </div>
          </div>
          <div>
            <div className="w-49.5 h-10 rounded-lg bg-[#1C92E0] flex items-center justify-center gap-2.5"
              onClick={(e)=>e.preventDefault()}>
              <Image src={"/icons/cart-empty.svg"} alt="icon" width={20} height={20} className="h-5 w-5"/>
              <p className="text-white">Savatchaga</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BookItem
