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
     
    </div>
  )
}

export default Carrousel
