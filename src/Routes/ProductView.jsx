import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../Context/ProductsProvider'

const ProductView = () => {

    const {name} = useParams()

    const [quanty, setQuanty] = useState(1)

  

    const {dataProducts} = useContext(ProductsContext)

    console.log(dataProducts)

    const producto = dataProducts.filter(product=> product.nombre == name)
    
    console.log(producto[0].URL)

    useEffect(()=>{

    },[quanty])


 
  return (
    <div className='px-44 py-12 flex mx-auto bg-gray-100'>
        <div>
        <div className='flex'>
        <div className='w-2/4 flex justify-center '>
            <div className='w-96 bg-white flex justify-center shadow-gray-400 shadow-2xl rounded-xl'>
                <img className='py-5 ' src={producto[0].URL} alt={producto[0].nombre} />
            </div>
            
        </div>
        <div className='w-2/4 flex flex-col mr-0 ml-auto justify-center'>
            <h2 className='text-3xl font-bold mb-6'>{producto[0].nombre}</h2>
            <p className='mb-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga est distinctio cumque eos omnis nam, quisquam nulla laudantium? Dolor recusandae cumque corporis iste ipsam atque eos. Explicabo, pariatur porro!
            Modi dolor earum quo optio molestias iure neque tempore corrupti aliquid culpa vel labore eius accusamus dicta deleniti blanditiis, porro asperiores nisi nam incidunt, dolores id? Vel architecto odio blanditiis.</p>
            <p>{producto.precio}</p>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-4'>
                    <button className='mr-2 font-medium text-orange-500 w-4 text-lg' onClick={()=>{setQuanty(quanty==1 ? quanty : quanty-1)}} >-</button>
                    <form >
                        <input className='w-14 h-10 rounded-md focus:ring-orange-400 focus:border-orange-400' name='quanty' onChange={e=>setQuanty(parseInt(e.target.value))} value={quanty} min="1" max="10" type="number" readOnly/>
                    </form>
                    <button className='ml-2 font-medium text-orange-500 w-4' onClick={()=>{setQuanty(quanty+1)}} >+</button>
                </div>
                
                <button className='h-10 text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none duration-500 focus:ring-orange-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-400 dark:focus:ring-orange-600'>
                    Añadir a carrito
                </button>
            </div>
            <div className='flex gap-5 mt-4'>
                <div className='flex flex-col w-1/3'>
                    <span className='text-orange-500 text-base font-medium'>Devolución gratis.</span>
                    <p className='text-sm text-gray-600'>Tenés 30 días desde que lo recibís.</p>
                </div>
                <div className='flex flex-col w-1/3'>
                    <span className='text-orange-500 text-base font-medium'>Compra Protegida</span>
                    <p className='text-sm text-gray-600'>Recibí el producto que esperabas o te devolvemos tu dinero.</p>
                </div>
                <div className='flex flex-col w-1/3'>
                    <span className='text-orange-500 text-base font-medium'>Garantía asegurada</span>
                    <p className='text-sm text-gray-600'>1 años de garantía de fábrica.</p>
                </div>
            

            </div>
        </div>
        </div>
        <div className='flex gap-10'>
            <div className='w-4/6 p-10 text-justify'>
                <h2 className='mb-6 text-2xl font-semibold'>Caracteristicas</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda magni cum recusandae veritatis cumque voluptate aliquam corporis illo ut ex, laboriosam optio saepe obcaecati repudiandae odio enim id nesciunt similique.
                Voluptatem velit voluptates doloremque vel, temporibus assumenda magnam accusamus sit corrupti molestiae, quas autem neque facere incidunt consequuntur? Harum repellendus nemo odio ad quae ullam exercitationem quis, quidem dolores voluptates!
                Nostrum consequatur velit expedita, repudiandae veniam veritatis nemo inventore assumenda numquam ratione nam pariatur modi! Doloribus officiis veniam neque? Veniam molestias totam libero cupiditate id quam voluptates dignissimos animi quo.
                Ad soluta, laborum maiores totam fuga sit blanditiis cumque numquam ratione harum error iusto magni maxime deserunt ducimus dolores enim minima, vero adipisci alias iure? Quidem dolores voluptate ad error.</p>
            </div>
            <div className='w-2/6'>
                <h2 className='pt-10 text-2xl font-semibold mb-6'>¿Que incluye?</h2>
                <ul>
                    <li> <span className='text-orange-400 font-semibold mr-2 w-4'>1x</span>Caja original</li>                    
                    <li> <span className='text-orange-400 font-semibold mr-2 w-4'>1x</span>Cables</li>
                    <li> <span className='text-orange-400 font-semibold mr-2 w-4'>2x</span>Accesorios</li>
                    <li> <span className='text-orange-400 font-semibold mr-2 w-4'>1x</span>Manual de instrucciones</li>
                </ul>
            </div>
        </div>
        </div>

    </div>
  )
}

export default ProductView
