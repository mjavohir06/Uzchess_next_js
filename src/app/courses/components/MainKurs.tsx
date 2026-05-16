"use client"

import BreadCrumb from "@/components/mini/BreadCrumb"
import Ustun1Kurs from "./Ustun1Kurs"
import Ustun2Kurs from "./Ustun2Kurs"
import { KursType } from "@/types/Kurslar"
import Yoshlarportali from "@/components/repeated/Yoshlarportali"
import LoyihaRivoji from "@/components/repeated/LoyihaRivoji"

import { PaginatedResultType } from "@/types/PaginatedResult"
const MainKurs = ({kurslar,status}:{kurslar: PaginatedResultType<KursType[]|undefined>,status:number}) => {



  return (
    <>
    <BreadCrumb item={[{title:"Kurslar"}]}/>
    <section className="container3">
        <Ustun1Kurs/>
        <Ustun2Kurs kurslar={kurslar} status={status}/>
        <div className="ustun3">
          <Yoshlarportali/>
          <LoyihaRivoji/>
        </div>

    </section>
      
    </>
  )
}

export default MainKurs
