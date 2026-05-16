import BreadCrumb from "@/components/mini/BreadCrumb"
import LoyihaRivoji from "@/components/repeated/LoyihaRivoji"
import Yoshlarportali from "@/components/repeated/Yoshlarportali"
import { Eye, Facebook, Link2, Share2, Twitter } from "lucide-react"
import Image from "next/image"

const info = {
    name: "Foydalanish qoidalari",
    title:"Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.",
    HTML:`
    <p style="color:#888888;size:18px;line-height:140%">TOSHKENT, 7 avgust – <span style="color:#1C92E0">#sputnik.</span> 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.<br/><br/>
Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi. Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.<br/><br/>
Bungacha o‘zbekistonlik badmintonchilar <span style="text-decoration: underline;color:#afafaf">“Osiyo bolalari”</span> xalqaro sport o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.</p><br/>
<ul style="color:#888888;size:18px;line-height:140%;list-style-type: disc; padding-left:20px">
<li>Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.</li>
<li>TOSHKENT, 7 avgust – #sputnik. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.</li>
<li>Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi. Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.</li>
<li>Bungacha o‘zbekistonlik badmintonchilar <span style="text-decoration: underline;color:#afafaf">“Osiyo bolalari”</span> <span style="font-weight:900">xalqaro sport o‘yinlarida</span> turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.</li>
</ul>`
}



async function page() {
    return (
        <>
        <BreadCrumb item={[{title:"Foydalanish qoidalari"}]}/>
            <section className="container2">
                <div className="ustun12">
                    <article className='w-full p-5 h-auto grid gap-4 bg-[#1A1D1F] border border-[#1F272A] rounded-lg pr-25'>
                        <div className='grid gap-3'>
                            <p className='text-[28px]'>{info.name}</p>
                        </div>
                        <div>
                            <div className='pb-6 border-b border-b-[#F7F9FA1A] pt-3 '>
                                <p className="text-[18px]">{info.title}</p>
                                <br/>
                                <div dangerouslySetInnerHTML={{__html:info.HTML}}>

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
                                    
                                    <div className='flex gap-1 w-48 h-10 items-center justify-center bg-[#F7F9FA1A] rounded-lg'>
                                        <p>Ulashish</p>
                                        <Share2 size={20} color='#fff' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="ustun3">
                    <LoyihaRivoji/>
                    <Yoshlarportali/>
                </div>

            </section>
        </>
    )
}

export default page
