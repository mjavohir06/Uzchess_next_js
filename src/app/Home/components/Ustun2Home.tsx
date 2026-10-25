import React from 'react'
import HomeBarMenu from './Elements/HomeBarMenu'
import HomeNews from './Elements/HomeNews'


const Ustun2Home = () => {
  return (
    <div className='ustun2'>
      <div className='flex justify-between items-center'>
        <HomeBarMenu label='Kurslar' img='/Kurslar/cap.svg'/>
        <HomeBarMenu label='Kutubxona' img='/Kutubxona/book.svg'/>
      </div>

      <HomeNews/>
    </div>
  )
}

export default Ustun2Home
