export interface KursType {
   id: number;

  
  author: Author;

  
  category: Category;

  
  language: Language;

  difficulty: Daraja;

  title: string;

  image: string;

  price: number;

  newPrice?: number;

  rating?: number;


  isLiked: boolean;

  sectionsCount: number;
}
type Category={
  id:number
  name:string
}

type Author = {
  id: number
  name: string
}

type Daraja = {
  id: number
  title: string
  icon: string
}

type Language = {
  id: number
  title: string
  code: string
}