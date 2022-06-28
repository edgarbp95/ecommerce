import { useEffect, useState } from "react";
import ItemCarouselOffers from "./ItemCarouselOffers"

const CarouselProducts = () => {

    
    const slideRight = ()=>{
        if(slideIndex==0){
           setSlideIndex(slideIndex + 1)
        } else if(slideIndex ==1){
            setSlideIndex(slideIndex - 1)
        }
        
    }

    const slideLeft = ()=>{
        if(slideIndex==1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex ==0){
            setSlideIndex(slideIndex + 1)
        }
        
    }

    let [slideIndex, setSlideIndex] = useState(0);

   useEffect(()=>{
    console.log(slideIndex)

   },[slideIndex])


  return (
    <div className="container h-auto w-3/4 p-5 mx-auto pb-20 relative sm:container">
        <h1 className="text-center text-3xl text-blackp font-semibold mb-10">Ofertas Imperdibles</h1>
        <div className="flex gap-2 colums-3  items-center overflow-x-auto">
            {   
                slideIndex==0 ?
                    (
                        <>
                        <ItemCarouselOffers name="Apple Watch Series 7 GPS" image="https://cf.shopee.com.ar/file/f44de202a033befc26ee4aa519bd14dc" dataIndex="0" />
                        <ItemCarouselOffers name="Teclado Logitech G PRO" image="https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png" dataIndex="1" />
                        <ItemCarouselOffers name="Logitech G305 Lightspeed" image="https://ockam-cloud-thebest.imgix.net/imagenes-s/productos/mouse-logitech-g305-lightspeed-black-87983.jpg?auto=format" dataIndex="2" />
                        <ItemCarouselOffers name="Logitech G502 Hero KDA" image="https://mexx-img-2019.s3.amazonaws.com/mouse-kda-lol-gamer_40658_1.jpeg" dataIndex="3" />
                        <button onClick={slideRight} className=' hover:bg-orange-500 duration-500 w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full absolute right-0'> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> </button>
                        
                        </>
                        )
                    
                 : 
                    (
                        <>                       
                        <ItemCarouselOffers name="Headset Logitech Gamer" image="https://http2.mlstatic.com/D_NQ_NP_698528-MLA42088510406_062020-O.webp" dataIndex="4" />
                        <ItemCarouselOffers name="Headset Logitech Gamer" image= "https://http2.mlstatic.com/D_NQ_NP_748160-MLA40459801205_012020-V.jpg" dataIndex="5" />
                        <ItemCarouselOffers name="Headset Razer Kraken USB" image="https://http2.mlstatic.com/D_NQ_NP_620982-MLA45269556370_032021-O.webp" dataIndex="6" />
                        <ItemCarouselOffers name="Mouse Razer Deathadder Elite" image="https://xt-pc.com.ar/img/productos/Pics_Prod/MOU738.jpg"dataIndex="7" />
                        
                        <button onClick={slideLeft} className='w-10 h-10 flex bg-orange-400 hover:bg-orange-500 duration-500 rounded-full absolute items-center justify-center left-0 '> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> </button>
                        <button className="mr-0 ml-auto text-orange-400 hover:text-orange-500 font-medium absolute bottom-10 right-4 nav_menu_option">Ver todos...</button>
                        </> 
                    )
                

            }
                        
        
        
        </div>
      
      
    </div>
  )
}

export default CarouselProducts
