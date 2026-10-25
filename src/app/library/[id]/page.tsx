import BreadCrumb from "@/components/mini/BreadCrumb";
import TopKitoblar from "@/components/repeated/TopKitoblar";
import Yoshlarportali from "@/components/repeated/Yoshlarportali";
import {  Heart, Share2, ShoppingCart } from "lucide-react";

export default function LibrarySinglePage() {
    return (
        <>
            <BreadCrumb item={[{ title: "Kutubxona", url: "/library" }, { title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering" }]} />
            <section className="container2">
                <div className="ustun12">

                    <article className="flex flex-col lg:flex-row gap-6 p-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                {/* Book cover */}
                                <div className="shrink-0">
                                    <img
                                        src="/books/main.jpg"
                                        alt="Book cover"
                                        className="w-36 h-48 object-cover rounded-lg bg-gray-700 shadow-lg"
                                    />
                                </div>

                                {/* Book info */}
                                <div className="flex-1 min-w-0">
                                    <h1 className="text-xl font-bold text-white leading-snug mb-3">
                                        Shaxmatdagi qobiliyatlaringizga qayta baxo bering
                                    </h1>

                                    {/* Price */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-blue-400 font-bold text-lg flex items-center gap-1">
                                            <span className="text-sm">💳</span> 55 000.00 UZS
                                        </span>
                                        <span className="text-gray-500 text-sm line-through">180 000.00 uzs</span>
                                    </div>

                                    {/* Meta */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 text-xs">
                                        {[
                                            { label: "Daraja", value: "Boshlangich" },
                                            { label: "Muallif", value: "Jeremy Silman" },
                                            { label: "Sahifa soni", value: "231" },
                                            { label: "Chop etilgan sana", value: "2002" },
                                        ].map((item) => (
                                            <div key={item.label}>
                                                <p className="text-gray-500 mb-0.5">{item.label}</p>
                                                <p className="text-white font-medium">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
                                            <ShoppingCart size={16} /> Savatchaga
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-lg text-gray-400 hover:text-red-400 hover:border-red-400 transition">
                                            <Heart size={16} />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-lg text-gray-400 hover:text-blue-400 hover:border-blue-400 transition">
                                            <Share2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-base font-bold text-white mb-3">Kitob haqida</h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan.
                                    Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay
                                    yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar
                                    va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan
                                    muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning
                                    har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqini kengaytiruvchi sayohatni baham ko'radi.
                                    va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan
                                    narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="ustun3">

                    <Yoshlarportali />
                    <TopKitoblar/>
                </div>


            </section>
        </>
    );
}