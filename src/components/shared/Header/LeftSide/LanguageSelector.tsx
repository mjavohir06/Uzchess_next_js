"use client";
import clsx from "clsx";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export const LanguageSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lgarr=["O'zbekcha","Inglizcha","Rushcha"]
  const [lg,setlg]=useState(lgarr[0])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
      <div ref={ref}
           onClick={() => setIsExpanded(prevState => !prevState)}
           className={"flex gap-2 font-medium hover:cursor-pointer relative"}>
        <h3 className={"font-medium"}>{lg}</h3>
        <Image src={'/icons/arrow.svg'}
               alt={'language selector arrow'}
               width={24}
               height={24}
               className={clsx("w-6 h-6 transition-all duration-200",{
                "rotate-x-180":isExpanded
               })}
        />

        {isExpanded &&
          <ul className={"absolute -left-5 rounded-lg bg-(--dark) border border-(--stroke) top-8.25 min-w-40.5c z-10"}>
            {
              lgarr.map((e,i)=><li key={i} className={"px-4 py-3 hover:bg-[#FFFFFF0D]"} onClick={()=>setlg(e)}>{e}</li>)
            }
          </ul>
        }
      </div>
  );
};
