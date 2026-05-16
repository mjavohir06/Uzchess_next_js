import Image from 'next/image';
import Link from "next/link";
import {SocialLink} from "@/components/shared/Footer/SocialLink";

export const FooterTop = () => {
  return (
    <div className={"flex flex-col gap-4 items-center bg-(--dark) pt-8 pb-6"}>
      <Image src={'/images/logo.png'} alt={'Site logo'} width={104} height={4} className={"w-28"}/>
      <section className={"flex gap-6 flex-wrap justify-center"}>
        <Link href={'/about-us'}>Biz haqimizda</Link>
        <Link href={'/about-us'}>Cookie fayllari siyosati</Link>
        <Link href={'/information'}>Foydalanish qoidalari</Link>
        <Link href={'/about-us'}>Cookie fayllari siyosati</Link>
        <Link href={'/about-us'}>Biz bilan bog&apos;lanish</Link>
      </section>
      <section className={"flex gap-6"}>
        <SocialLink icon={'/images/instagram.png'} url={'/url'}/>
        <SocialLink icon={'/images/telegram.png'} url={'/url'}/>
        <SocialLink icon={'/images/youtube.png'} url={'/url'}/>
        <SocialLink icon={'/images/twitter.png'} url={'/url'}/>
        <SocialLink icon={'/images/facebook.png'} url={'/url'}/>
      </section>
    </div>
  );
};