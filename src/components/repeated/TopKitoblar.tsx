"use client"
import Image from "next/image"
import Title from "../mini/Title"

const booksarr = [
    {
        title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBN_GfL6JhmNdMaWJGXsXmoNhFKgR40dze8g&s",
        author: "J.Silman"
    },
    {
        title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBN_GfL6JhmNdMaWJGXsXmoNhFKgR40dze8g&s",
        author: "J.Silman"
    },
    {
        title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering Shaxmatdagi qobiliyatliringizga qayta baxo bering",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBN_GfL6JhmNdMaWJGXsXmoNhFKgR40dze8g&s",
        author: "J.Silman"
    },
    {
        title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBN_GfL6JhmNdMaWJGXsXmoNhFKgR40dze8g&s",
        author: "J.Silman"
    },
]



const TopKitoblar = () => {
    return (
        <article className="w-full h-auto rounded-lg bg-[#1A1D1F] pt-4 pb-4">
            <Title title="Top kitoplar" url="/library" />

            <nav className="w-full pl-4 ">
                {
                    booksarr.map((e, i) =>
                        <div key={i} className="w-full h-23 flex gap-2.5 border-b border-b-[#1F272A] pb-3 pr-4 mt-3 hover:text-[#1C92E0]">
                            <div className="w-13.5 h-full overflow-clip rounded-lg">
                                <Image src={e.img} alt="book" width={54} height={80}/>
                            </div>
                            <div className="w-57.5 h-full">
                                <div className="w-full h-[50%]">
                                    <p className="text-[13px] line-clamp-2">{e.title}</p>
                                </div>
                                <div className="w-full h-[50%]">
                                    <p className="text-[13px] text-[#F0F0F0B8]">{e.author}</p>
                                </div>
                            </div>

                        </div>
                    )
                }

            </nav>
        </article>
    )
}

export default TopKitoblar
