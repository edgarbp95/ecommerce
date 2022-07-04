import React, { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../Context/CartProvider';


import ItemCart from './ItemCart'

const Cart = () => {

    const { cart, cartState, setCartState, cartTrue, cartFalse } = useContext(CartContext);

  

    console.log(cart)
    
    console.log(cartState)

    useEffect(()=>{

    },[cart])

    let descuento = 0;

    console.log(cart)

    let arraySubtotal = [];

    for(let i in cart){
        arraySubtotal.push(cart[i].price*cart[i].quantyCart)
    }

    let subtotal = arraySubtotal.reduce((prev,current)=>prev+current,0)

    let shipping = 200;

    
    let cuponesActivos =["XPRIMER","30%OFF", "MOTHERDAY"]

    const [cuponState, setCuponState] = useState(0);

    const [cuponActiveState, setCuponActiveState] = useState(0);

    const cuponValidation = (data)=>{
        if(cart!=""){
            for(let cupon in data){
                if(data[cupon] === cuponState){
                    if(cuponState == "XPRIMER"){
                        setCuponActiveState(500)
                    } else if(cuponState=="30%OFF"){
                        setCuponActiveState()
                    }
                }
        }
     }
    }   
    

  return (
    <div className=''>
        <div className='p-6'>
        <h2 className='font-medium text-orange-500 tracking-wider border-b border-gray-300 pb-2'>TU CARRITO</h2>
        <div className='flex flex-col w-full mt-2 overflow-y-auto h-60 sm:h-72'>

                {cart == "" ? <h2 className='text-gray-500'>El carrito está vacio</h2> : cart.map((item)=>(
                    <ItemCart key={item.id} name={item.name} price={item.price} image={item.image} quantyCart={item.quantyCart} />
                    ))}
        </div>
        <div className='absolute bottom-6 w-full flex flex-col gap-1 pr-14 sm:relative sm:pr-0 sm:bottom-0'>
            <div className='flex justify-between border-b border-gray-300 items-center'>
                <p className='text-gray-400 text-xs tracking-wide'>SUBTOTAL</p>
                <span className='text-gray-600 font-medium text-base'>${subtotal}</span>
            </div>
            <div className='flex justify-between border-b border-gray-300'>
                <p className='text-gray-400 text-xs tracking-wide'>ENVIO</p>
                <span className='text-gray-600 font-medium text-base'>${cart == "" ? 0 :shipping}</span>
            </div>
            <div className='flex justify-between border-b border-gray-300'>
                <p className='text-gray-400 text-xs tracking-wide'>DESCUENTOS</p>
                <span className='text-gray-600 font-medium text-base'>
                    ${cuponActiveState}
                </span>
            </div>
            <div className='flex justify-between '>
                <p className='text-gray-400 text-xs tracking-wide'>TOTAL</p>
                <span className='text-gray-600 font-medium text-base'>${cart=="" ? 0 : subtotal-shipping-cuponActiveState}</span>
            </div>
            <div className='flex flex-col justify-between'>
               <div className='flex justify-between w-full'>
                    <input onChange={(e)=>{setCuponState(e.target.value)}} type="text" placeholder="XXX-XXX" className='h-10 w-2/4 text-gray-500 mt-4 text-sm text-center dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 '/>
                    <button onClick={()=>{cuponValidation(cuponesActivos)}} className='h-10 w-28 text-white  mt-4 text-sm bg-orange-400'>Validar cupon</button>
                    
                </div>
                {cuponActiveState==500 && 
                <div className='flex gap-2 border-2 border-orange-500 w-2/4 text-xs justify-between p-1 text-white bg-orange-500 mt-2 sm:w-3/4'>
                    <p>XPRIMER ACTIVADO</p>
                    <button onClick={()=>{setCuponActiveState(0)}} >X</button>
                </div>
                }
                <button className='h-10 w-full text-white mx-auto mt-4 bg-orange-400'>Confirmar</button>
            </div>
            
        </div>
        </div>
    </div>

  )
}

export default Cart
