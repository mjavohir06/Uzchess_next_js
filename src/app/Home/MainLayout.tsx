"use client"
import React, { useState } from 'react'
import { MainContext } from './Main.Context'
import Header from '@/components/shared/Header/Header'
import { Footer } from '@/components/shared/Footer/Footer'

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [isLogin, setLogin] = useState(false)
    return (
        <MainContext.Provider value={{ isLogin, setLogin }}>
            <Header />
            <main className="grid grow px-8 mb-12 items-start content-start">
                {children}
            </main>
            <Footer />
        </MainContext.Provider>
    )
}

export default MainLayout
