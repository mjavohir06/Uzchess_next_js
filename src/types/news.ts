export interface News {
    id: number;
    title: string;
    image: string;
    content: string;
    date: string;
}


export interface OneNews{
    id: number;
    title: string;
    image: string;
    content: string;
    date: string;
    richText:string
    views:number
    othernews:News[]
}