import { fetcher } from "@/lib/utills/FetchRes"
import { KursDetail } from "@/types/Kurslar"
import { BookOpen, Clock, Heart, Share2, Users } from "lucide-react"
import { StarRating } from "./elements/Starrating"
import { AccordionItem, Review } from "./elements/types";
import { Accordion } from "./elements/Accordition";
import { ReviewCard } from "./elements/ReviewCard";
import BreadCrumb from "@/components/mini/BreadCrumb";
import Yoshlarportali from "@/components/repeated/Yoshlarportali";

const accordionData: AccordionItem[] = [
    {
        id: 1,
        title: "1. Asosiy donalar",
        lessons: [
            { title: "1.1 Kirish", duration: "07:52" },
            { title: "1.2 Mot qilish", duration: "08:48" },
            { title: "1.2 Foyda bilan tanishuv", duration: "01:46" },
        ],
    },
    { id: 2, title: "2. Eng ko'p foydalaniladigan donalar", lessons: [] },
    { id: 3, title: "3. Mot qilish oson bo'lgan donalar", lessons: [] },
];

const reviews: Review[] = [
    {
        id: 1,
        name: "Jasurbek Narzulayev",
        date: "1 iyun 2022 y, 11:12",
        rating: 3,
        avatar: "/avatars/1.jpg",
        text: "2016 yilda Nyu-Yorkda Karjeken va Karlsen shaxmat toj uchun o'yinda uchrashishdi...",
    },
    {
        id: 2,
        name: "Muhammadamin Danilahonov",
        date: "1 iyun 2022 y, 10:12",
        rating: 4,
        avatar: "/avatars/2.jpg",
        text: "2016 yilda Nyu-Yorkda Karjeken va Karlsen shaxmat toj uchun o'yinda uchrashishdi...",
    },
    {
        id: 3,
        name: "Shoxruh Botilyarov",
        date: "1 iyun 2022 y, 9:12",
        rating: 5,
        avatar: "/avatars/3.jpg",
        text: "2016 yilda Nyu-Yorkda Karjeken va Karlsen shaxmat toj uchun o'yinda uchrashishdi...",
    },
    {
        id: 4,
        name: "Jasurbek Narzulayev",
        date: "1 iyun 2022 y, 8:12",
        rating: 3,
        avatar: "/avatars/1.jpg",
        text: "2016 yilda Nyu-Yorkda Karjeken va Karlsen shaxmat toj uchun o'yinda uchrashishdi...",
        isWarned: true,
    },
];



export default async function CourseSinglePage({ params }: { params: Promise<{ id: string }> }) {

    // const id = (await params).id

    // // const news = await getOneNew(Number(id))
    // const res = await fetcher.get<KursDetail>(`public/courses/${id}`)
    // if (!res.data) return <></>
    // const KursDetail = res.data
    // console.log(KursDetail);


    return (
        <div>
            <BreadCrumb item={[{ title: "Kurslar", url: "course" }, { title: "Shaxmat donalari bilan tanishuv" }]} />
            <div className="flex p-[15px_25px] mb-4 w-full items-center justify-between rounded-lg border bg-[linear-gradient(180deg,rgba(11,20,24,0)/-3.98%,#0B1418)]  border-[#F7F9FA14]">
                <div>
                    <h1 className="text-xl font-bold text-white text-[24px]">
                        Shaxmat donalari bilan tanishuv
                    </h1>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 flex-wrap">
                        <span className="flex items-center gap-1 text-blue-600 font-semibold text-[20px]">
                            <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
                            55 000,00 UZS
                        </span>
                        <span className="flex items-center gap-1 text-[18px]">
                            <Users size={18} /> Boshlang'ich
                        </span>
                        <span className="flex items-center gap-1 text-[18px]">
                            <Clock size={18} /> 4 soatlar
                        </span>
                        <span className="flex items-center gap-1 text-[18px]">
                            <BookOpen size={18} /> 26 darslar
                        </span>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-5">
                        <StarRating rating={4} />
                        <span className="text-sm font-semibold text-gray-500 text-[16px]">4.0</span>
                    </div>
                </div>

                <div>
                    <div className="w-full lg:w-64 shrink-0">
                        <div className="sticky top-4 flex flex-col gap-2">
                            <button className="w-full bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition">
                                Kursni sotib olish
                            </button>
                            <div className="flex gap-2">
                                <button className="flex-1 border border-gray-200 rounded-lg py-2 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
                                    <Heart size={16} />
                                </button>
                                <button className="flex-1 border border-gray-200 rounded-lg py-2 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <section className="container2">
                <div className="ustun12">
                    {/* Breadcrumb */}



                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* LEFT */}
                        <div className="flex-1 min-w-0">
                            {/* Title & meta */}


                            {/* Accordion */}
                            <Accordion items={accordionData} />

                            {/* Reviews */}
                            <div className="mt-8">
                                <h2 className="text-base font-bold text-white mb-3">Kurs haqida izohlar</h2>
                                <div className="divide-y divide-gray-100">
                                    {reviews.map((r) => (
                                        <ReviewCard key={r.id} review={r} />
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button className="px-6 py-2 border border-gray-300 rounded-full text-sm text-white hover:bg-gray-50 transition">
                                        Barcha izohlar
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Sticky CTA */}

                    </div>
                </div>

                <div className="ustun3">
                    <Yoshlarportali />
                </div>
            </section>
        </div>
    );
}