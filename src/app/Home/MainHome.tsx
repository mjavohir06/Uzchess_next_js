"use client"

import LoyihaRivoji from "@/components/repeated/LoyihaRivoji"
import Ustun1Home from "./components/Ustun1Home"
import Ustun2Home from "./components/Ustun2Home"
import Yoshlarportali from "@/components/repeated/Yoshlarportali"
import TopKitoblar from "@/components/repeated/TopKitoblar"

const MainHome = () => {
  return (
    <section className="container3 mt-6">
        <Ustun1Home/>
        <Ustun2Home/>
        <div className="ustun3">
            <LoyihaRivoji/>
            <Yoshlarportali/>
            <TopKitoblar/>
        </div>
      
    </section>
  )
}

export default MainHome
