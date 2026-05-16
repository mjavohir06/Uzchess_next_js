"use client"

import { KursType } from "@/types/Kurslar"
import { createContext } from "react"

interface KursContextType{
    search:string
    kurslar:KursType[]
}

export const KursContext=createContext<KursContextType|null>(null)
