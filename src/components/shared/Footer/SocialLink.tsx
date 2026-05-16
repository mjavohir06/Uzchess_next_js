import Link from "next/link";
import Image from "next/image";

interface Props {
  icon: string;
  url: string;

}

export const SocialLink = ({icon, url}: Props) => {
  return (
    <Link href={url}>
      <Image src={icon} alt={'social media icon'} width={20} height={20} className={"w-5 h-5"}/>
    </Link>
  );
};