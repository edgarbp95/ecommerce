import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../Context/ProductsProvider'
import ItemCarousel from './ItemCarousel'

const Carousel = () => {


    const {dataProducts} = useContext(ProductsContext)
    const [slide,setSlide]=useState(0)
    useEffect(()=>{

    },[slide])
    
    console.log(dataProducts)

    const mapear = (dataProducts)=>{
        if(slide==0){
            return (
                <>
                    {dataProducts.filter(product => product.id>=0 && product.id<4).map((product)=>( 
                    <ItemCarousel key={product.id} dataIndex={product.id} image={product.URL} name={product.nombre} precio={product.precio} viewProduct={product.id}  />
               )) }
               <button onClick={()=>{setSlide(slide + 1)}} className=' hover:bg-orange-500 duration-500 w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full absolute right-0'> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> </button>
                </>
            )
        } else if (slide==1){
            return(
                <>
                {dataProducts.filter(product => product.id>=4 && product.id<8).map((product)=>(
                    <ItemCarousel key={product.id} dataIndex={product.id} image={product.URL} name={product.nombre} precio={product.precio} viewProduct={product.id} />
                ))
                }
                <button onClick={()=>{setSlide(slide + 1)}} className=' hover:bg-orange-500 duration-500 w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full absolute right-0'> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> </button>
                <button onClick={()=>{setSlide(slide - 1)}} className='w-10 h-10 flex bg-orange-400 hover:bg-orange-500 duration-500 rounded-full absolute items-center justify-center left-0 '> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> </button>
                </>
            )
        } else if (slide==2){
            return (
            <>
            {dataProducts.filter(product => product.id>=8 && product.id<12).map((product)=>(
                    
                <ItemCarousel key={product.id} dataIndex={product.id} image={product.URL} name={product.nombre} precio={product.precio} viewProduct={product.id} />
            ))}
           <button onClick={()=>{setSlide(slide - 1)}} className='w-10 h-10 flex bg-orange-400 hover:bg-orange-500 duration-500 rounded-full absolute items-center justify-center left-0 '> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> </button>
           <button className="mr-0 ml-auto text-orange-400 hover:text-orange-500 font-medium absolute bottom-10 right-4 nav_menu_option">Ver todos...</button>
            </>
            )
        }
    }

 
  return (
    <div className="h-auto w-3/4 p-5 mx-auto pb-20 relative sm:container sm:pb-10 md:w-full">
        <h2 className="text-center text-3xl text-blackp font-semibold mb-10 sm:text-2xl sm:mb6 md:text-2xl">Nuevos Ingresos</h2>
        <div className="flex gap-2 colums-3  items-center overflow-x-auto sm:hidden">
            {mapear(dataProducts)}
        </div>
        <div className="hidden gap-2 colums-3  items-center overflow-x-auto sm:flex">
            {dataProducts.map((product)=>(
                    
                    <ItemCarousel key={product.id} dataIndex={product.id} image={product.URL} name={product.nombre} precio={product.precio} viewProduct={product.id} />
                ))}
            <button className="mr-0 ml-auto text-orange-400 hover:text-orange-500 font-medium absolute bottom-0 right-4 nav_menu_option">Ver todos...</button>
        </div>

    </div>
  )
}

export default Carousel

