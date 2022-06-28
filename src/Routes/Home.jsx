import React from 'react'
import Carrousel from '../Components/CarouselBanners/Carrousel'
import CarouselMouse from '../Components/CarouselMouse/CarouselMouse'
import CarouselOffers from '../Components/CarouselOffers/CarouselOffers'
import InfoWebBar from '../Components/InfoBar/InfoWebBar'


const Home = () => {
  return (
    <div className='bg-gray-100'>
    <Carrousel />
    <InfoWebBar />
    <CarouselOffers />
    <CarouselMouse />

    </div>
  )
}

export default Home
