import { getKursBy } from "@/lib/api/Kurlar"
import MainKurs from "./components/MainKurs"
import { KursType } from "@/types/Kurslar"
import { fetcher } from "@/lib/utills/FetchRes"
import { PaginatedResultType, ParamSType } from "@/types/PaginatedResult"





async function page({searchParams}:{searchParams:Promise<ParamSType>}) {

  
  const params=await searchParams
  
  const queryString=new URLSearchParams(params).toString()
  
  const kurslar=await fetcher.get<PaginatedResultType<KursType[]|undefined>>(`public/courses?${queryString}`,{excludeStatus:[400]})
  console.log(kurslar);
  
  
  return <MainKurs kurslar={kurslar.data} status={kurslar.status}/>
}

export default page
