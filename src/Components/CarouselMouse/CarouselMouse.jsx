import { useEffect, useState } from "react";
import ItemCarouselOffers from "./ItemCarouselMouse"

const CarouselMouse = () => {

    
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
    <div className="sm:container w-3/4 git h-auto p-5 mx-auto pb-20 relative">
        <h1 className="text-center text-3xl text-blackp font-semibold mb-10">Mouse Gaming</h1>
        <div className="flex gap-2 items-center overflow-x-auto">
            {   
                slideIndex==0 ?
                    (
                        <>
                        <ItemCarouselOffers name="Marvo Mouse Gaming M513" image="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-marvo-gaming-m513-4800dpi-rgb-7b-0.jpg" dataIndex="0" />
                        <ItemCarouselOffers name="T Dagger Camaro-TGM306" image="https://zahcomputers.pk/wp-content/uploads/2022/05/T-DAGGER-Camaro-T-TGM306-RGB-Backlighting-Gaming-Mouse-Price-in-Pakistan-380x380.jpg" dataIndex="1" />
                        <ItemCarouselOffers name="Logitech G305 Lightspeed" image="https://ockam-cloud-thebest.imgix.net/imagenes-s/productos/mouse-logitech-g305-lightspeed-black-87983.jpg?auto=format" dataIndex="2" />
                        <ItemCarouselOffers name="Logitech G502 Wireless" image="https://m.media-amazon.com/images/I/51ZLPEu0SmS.jpg" dataIndex="3" />
                        <button onClick={slideRight} className=' hover:bg-orange-500 duration-500 w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full absolute right-0'> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> </button>
                        
                        </>
                        )
                    
                 : 
                    (
                        <>
                        <ItemCarouselOffers name="HyperX Pulsefire Raid RGB" image="https://mexx-img-2019.s3.amazonaws.com/37366_4.jpeg?v426" dataIndex="4" />
                        <ItemCarouselOffers name="Logitech G502 Hero KDA" image="https://mexx-img-2019.s3.amazonaws.com/mouse-kda-lol-gamer_40658_1.jpeg" dataIndex="5" />
                        <ItemCarouselOffers name="Redragon Griffin M607 Blanco" image="https://http2.mlstatic.com/D_NQ_NP_999434-MLA43532397665_092020-O.webp" dataIndex="6" />
                        <ItemCarouselOffers name="Steelseries Rival 310 Negro" image="https://stylewatch.vtexassets.com/arquivos/ids/204364/mouse-gaming-steelseries-rival-310-con-cable-st6806_01.jpg?v=637734740025170000"dataIndex="7" />
                        
                        <button onClick={slideLeft} className='w-10 h-10 flex bg-orange-400 hover:bg-orange-500 duration-500 rounded-full absolute items-center justify-center left-0 '> <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> </button>
                        
                        <button className=" mr-0 ml-auto text-orange-400 hover:text-orange-500 font-medium absolute nav_menu_option right-4 bottom-10">Ver todos...</button>
                        </>
                    )
                

            }
                        
        
        
        </div>
      
      
    </div>
  )
}

export default CarouselMouse
