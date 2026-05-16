import { BackendUrl } from "./Backend.url";


export const getKursBy = async (query: string) => {
  const res = await fetch(`${BackendUrl}/kurslar/many?${query}`, {
    cache: 'force-cache',
    next: {
      revalidate: 60,
    }
  });
  if (!res.ok) {
    
    throw new Error('Failed to fetch news');
  }
  const res2 = await res.json()

  return res2.data;

}