"use client"
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { AccordionItem } from "./types";



export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden ">
      {items.map((item) => (
        <div key={item.id} className="border-b last:border-b-0 border-gray-700">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-200 bg-[#1A1D1F] hover:bg-gray-700 transition"
          >
            <span className="text-white">{item.title}</span>
            {openId === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {openId === item.id && item.lessons.length > 0 && (
            <div className="bg-[#F7F9FA08] px-4 pb-3 flex gap-4">
              {item.lessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gray-700 rounded-lg border border-gray-400 p-3 w-32 gap-1 cursor-pointer hover:border-blue-400 transition"
                >
                  {/* icon placeholder */}
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <BookOpen size={18} className="text-yellow-500" />
                  </div>
                  <span className="text-xs text-gray-100">{lesson.duration}</span>
                  <span className="text-xs text-center text-gray-200 font-medium">{lesson.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </article>
  );
}