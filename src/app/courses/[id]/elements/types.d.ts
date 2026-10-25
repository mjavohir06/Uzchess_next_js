export interface AccordionItem {
  id: number;
  title: string;
  lessons: { title: string; duration: string }[];
}

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
  isWarned?: boolean;
}