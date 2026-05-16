"use client";
import {usePathname} from "next/navigation";
import {NavItem} from "@/components/shared/Header/NavBar/NavItem";

const destinations = [
  {title: 'Asosiy', url: '/'},
  {title: 'Yangiliklar', url: '/news'},
  {title: 'Kurslar', url: '/courses',link:"/courses?page=1"},
  {title: 'Kutubxona', url: '/library', link:"/library?page=1"},
  {title: 'Bog\'lanish', url: '/contact-us'},
]

export const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <nav>
      <ul className={"flex flex-wrap w-90 md:w-auto h-auto justify-center gap-10 gap-y-2"}>
        {destinations.map((dest) => {
          let isActive :boolean=false;
          if(pathname==dest.url && pathname==="/") isActive=true
          else if(pathname!=="/" && pathname.startsWith(dest.url) && dest.url!=="/") isActive=true
          return <NavItem key={dest.url} isActive={isActive} {...dest}/>
        })}
      </ul>
    </nav>
  );
};