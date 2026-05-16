import {News, OneNews} from "@/types/news";
import { BackendUrl } from "./Backend.url";

export async function getNews(): Promise<News[]> {
  const res = await fetch(`${BackendUrl}/news/many`, {
    cache: 'force-cache',
    next: {
      revalidate: 60,
    }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }
  const res2=await res.json()

  return res2.data;
}

export async function getOneNew(id:number):Promise<OneNews> {
  const res = await fetch(BackendUrl+'/news/one/'+id, {
    cache: 'force-cache',
    next: {
      revalidate: 60,
    }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }
  const res2=await res.json()

  return res2.data;
}