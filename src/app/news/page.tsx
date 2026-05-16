
import { getNews } from "@/lib/api/news";
import NewMain from "./components";
import { News } from "@/types/news";
import { fetcher } from "@/lib/utills/FetchRes";
import type { PaginatedResultType } from "@/types/PaginatedResult";

export default async function NewsPage() {

    const res = await fetcher.get<PaginatedResultType<News[]>>(`public/news` )
    if (!res.data) return <></>
    const news = res.data.data
    

    return <NewMain news={news} />
}