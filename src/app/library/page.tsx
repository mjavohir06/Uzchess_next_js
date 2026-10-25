import { fetcher } from "@/lib/utills/FetchRes";
import MainLibrary from "./components/MainLibrary";
import { PaginatedResultType, ParamSType } from "@/types/PaginatedResult";
import { BookType } from "@/types/Library";

export default async function Library( {searchParams}:{searchParams:Promise<ParamSType>}) {
    const params=await searchParams
      
      const queryString=new URLSearchParams(params).toString()
      
      const kitoblar=await fetcher.get<PaginatedResultType<BookType[]|undefined>>(`public/book?${queryString}`,{excludeStatus:[400]})
      console.log(kitoblar);

    return <MainLibrary kitoblar={kitoblar.data} status={kitoblar.status}/>
}