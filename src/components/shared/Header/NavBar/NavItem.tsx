import Link from "next/link";

export const NavItem = ({title, url,link, isActive}:{link?:string,title:string,url:string,isActive:boolean}) => {
  return (
    <li className={"relative py-2"}>
      <Link href={link?link:url}>
        {title}
        {isActive && <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-[1px] bg-(--blue)"></div>}
      </Link>
    </li>
  );
};