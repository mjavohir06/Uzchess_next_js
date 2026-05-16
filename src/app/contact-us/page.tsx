import BreadCrumb from "@/components/mini/BreadCrumb";
import YoshlarIshlari from "@/components/repeated/YoshlarIshlari";
import Yoshlarportali from "@/components/repeated/Yoshlarportali";
import ConnectInput from "./components/ConnectInput";
import InfoConnect from "./components/InfoConnect";


export default function Contact_Us() {
  return (
    <>
    <BreadCrumb item={[{title:"Bog'lanish"}]}/>
    <section className="container2">
        <article className="ustun12">
            <div className="w-full bg-[#1A1D1F] rounded-xl border-[#1F272A] p-6">
                <div className="w-full">
                    <p className="text-[28px] font-bold">Bog‘lanish</p>
                </div>
                <article className="w-full grid grid-cols-1 sm:grid-cols-[repeat(2,auto)] p-5 gap-6 ">
                    <ConnectInput/>
                    <InfoConnect/>
                </article>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.329986804759!2d69.20380834097536!3d41.285511214652615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1774245611472!5m2!1suz!2s" 
            className="rounded-xl w-full h-75"
            ></iframe>
        </article>
        <article className="ustun3">
            <Yoshlarportali/>
            <YoshlarIshlari/>
        </article>
    </section>
      
    </>
  )
}
