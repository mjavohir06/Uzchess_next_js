import React from 'react'
import Ustun1Library from './Ustun1Library'
import Ustun2Library from './Ustun2Library'
import YoshlarIshlari from '@/components/repeated/YoshlarIshlari'
import Yoshlarportali from '@/components/repeated/Yoshlarportali'
import BreadCrumb from '@/components/mini/BreadCrumb'

const MainLibrary = () => {
    return (
        <>
            <BreadCrumb item={[{title:"Kutubxona"}]}/>
            <section className='container3'>
                <Ustun1Library />
                <Ustun2Library />
                <div className='ustun3'>
                    <Yoshlarportali />
                    <YoshlarIshlari />
                </div>

            </section>
        </>
    )
}

export default MainLibrary
