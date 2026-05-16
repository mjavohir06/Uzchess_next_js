"use client"
import Select from "@/components/mini/Select"
import Image from "next/image"


const LeftSide = () => {
  return (
    <>
      {/* <div className="absolute w-154 h-154 rounded-[50%]  -top-115 -right-77 drop-shadow-[0px_0px_50px_#1C92E0] backdrop-blur-[350] z-9 "></div> */}
      
      
      
      
      <div className="flex w-full justify-end">
        <div className="w-42 h-10 flex  items-center mr-8 bg-[#15181A] p-2 rounded-lg">
          <Image src={"/login/global.svg"} alt="global" width={24} height={24} />
          <Select items={["O'zbekcha", "Ruscha", "Inglizcha"]} valueIndex={0} setValueIndex={(i: number) => { }} border={0} isbg={false} />
        </div>
      </div>
      <div className="w-[120%] shadow-[240px_200px_30px_#171717d8]  h-69.25 overflow-clip rounded-lg border-12 border-[#000000]">
        <Image src={"/login/screen.png"} alt="screen" width={350} height={277} className="w-full" />
      </div>
      <div className="w-full">
        <p className="text-[51px] font-black">Shaxmatni</p>
        <p className="text-[24px] font-bold">biz bilan o'rganing</p>
      </div>
    </>
  )
}

export default LeftSide
