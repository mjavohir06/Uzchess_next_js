import Image from "next/image";
import {LanguageSelector} from "@/components/shared/Header/LeftSide/LanguageSelector";
import {Divider} from "@/components/shared/Header/Divider";

export const LeftSide = () => {
  return (
    <section className={"flex gap-5 items-center mr-5"}>
      <Image src={'/images/logo.png'}
             alt={'site logo'}
             width={104}
             height={20}
             className={"w-26 h-5 object-cover object-bottom"}/>
      <Divider/>
      <LanguageSelector/>
    </section>
  );
};
