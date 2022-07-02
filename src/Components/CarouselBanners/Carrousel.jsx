import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsProvider'
import ItemCarrousel from './ItemCarrousel'
import auriculares from "/src/Images/auriculares.png"

const Carrousel = () => {

  const {dataProducts} = useContext(ProductsContext)

  const item1 = dataProducts.filter(product=> product.nombre =="Headset Logitech G635 Negro")
  console.log(item1)
  
  return (
    <div className={`bg relative bg-blackp flex items-center overflow-hidden`}>
      
      <ItemCarrousel imagen={auriculares} marca={item1[0].brand} name={item1[0].nombre} texto="Logitech G635 son unos auriculares inalámbricos con micrófono para gaming optimizados con la más avanzada tecnología de audio de Logitech. Los grandes transductores Pro-G de 50 mm y el sonido envolvente"/>
      {/* <div className="flex absolute bottom-3 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button
            type="button"
            className="w-3 h-3 rounded-full bg-orange-400"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
        />
        <button
            type="button"
            className="w-3 h-3 rounded-full bg-orange-400"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
        />
        <button
            type="button"
            className="w-3 h-3 rounded-full bg-orange-400"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
        />
    </div>

      <button className='w-10 h-10 flex bg-orange-400 rounded-full absolute left-5 items-center justify-center '> <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> </button>
      <button className='w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full absolute right-5'> <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </button> */}
    </div>
  )
}

export default Carrousel
