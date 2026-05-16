import clsx from "clsx"
import { X } from "lucide-react"
import Notices from "./components/Notices"

const noticies = [
    {
        img: "https://www.chess.com/bundles/web/images/social/share-news.f0cb71ce.png",
        title: "Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod debitis dolor dignissimos reprehenderit sunt adipisci sequi ducimus vero, obcaecati ea animi voluptatem nulla quis quibusdam! Obcaecati ad ipsam aspernatur voluptate iste itaque labore fugit, eaque quo vitae iure esse velit!",
        isread: false
    },
    {
        img: "https://www.chess.com/bundles/web/images/social/share-news.f0cb71ce.png",
        title: "Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod debitis dolor dignissimos reprehenderit sunt adipisci sequi ducimus vero, obcaecati ea animi voluptatem nulla quis quibusdam! Obcaecati ad ipsam aspernatur voluptate iste itaque labore fugit, eaque quo vitae iure esse velit!",
        isread: false
    },
    {
        img: "https://www.chess.com/bundles/web/images/social/share-news.f0cb71ce.png",
        title: "Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod debitis dolor dignissimos reprehenderit sunt adipisci sequi ducimus vero, obcaecati ea animi voluptatem nulla quis quibusdam! Obcaecati ad ipsam aspernatur voluptate iste itaque labore fugit, eaque quo vitae iure esse velit!",
        isread: false
    },
    {
        img: "https://www.chess.com/bundles/web/images/social/share-news.f0cb71ce.png",
        title: "Endilikda uzchess platformasidan kitoblar buyurtma qilishingiz mumkun 🤩 ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod debitis dolor dignissimos reprehenderit sunt adipisci sequi ducimus vero, obcaecati ea animi voluptatem nulla quis quibusdam! Obcaecati ad ipsam aspernatur voluptate iste itaque labore fugit, eaque quo vitae iure esse velit!",
        isread: false
    },

]




const Bildirishnoma = ({ setopen, open }: {
    setopen: (promp: boolean) => void
    open: boolean
}) => {
    return (
        <div className={clsx("fixed top-0 left-0 w-screen h-screen bg-[#000000ca] justify-end flex z-50", {
            "hidden": !open
        })}
            onClick={() => setopen(false)}>
            <div className="w-90 sm:w-118 h-screen bg-[#1A1D1F]" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between h-20 items-center pl-6 pr-6 border-b border-b-[#F7F9FA29]">
                    <p className="text-[24px] font-bold">Xabarnomalar</p>
                    <X color="#fff" size={32} onClick={() => setopen(false)} />
                </div>
                <div className="w-full pl-6 pr-8 grid overflow-y-scroll gap-4 pt-2 mt-2 pb-8 h-[calc(100vh-80px)]">
                    {
                        noticies.map((e, i) => <Notices key={i} e={e} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default Bildirishnoma
