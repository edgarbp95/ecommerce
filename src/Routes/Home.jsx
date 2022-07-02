import React, { useContext } from 'react'
import Carousel from '../Components/Carousel/Carousel'
import Carrousel from '../Components/CarouselBanners/Carrousel'
import CarouselMouse from '../Components/CarouselMouse/CarouselMouse'
import CarouselOffers from '../Components/CarouselOffers/CarouselOffers'
import InfoWebBar from '../Components/InfoBar/InfoWebBar'
import { ProductsContext } from '../Context/ProductsProvider'


const Home = () => {

  const { dataProducts } = useContext(ProductsContext);
  console.log(dataProducts)
  return (
    <div className='bg-gray-100'>
    <Carrousel />
    <InfoWebBar />
    <Carousel />
    <CarouselMouse />
    

    </div>
  )
}

export default Home
