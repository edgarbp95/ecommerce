import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Components/Cart'
import Input from '../Components/Input'

const CartShopp = () => {

    const [paymentMethod, setPaymentMethod] = useState()


  return (
    <div className='flex flex-col gap-2 py-20 items-center w-full bg-gray-100'>
        <div className='flex w-3/4'>
        <Link to="/"> 
        
            <p className='text-gray-500 hover:text-orange-400 hover:font-medium ml-2 mr-auto'> Home </p>
        
        </ Link>
        </div>
        <div className='flex justify-between w-3/4 mx-auto gap-10'>
            <div className='w-3/4 bg-white rounded-xl'>
            <form onSubmit={e=>e.preventDefault()} className=" w-5/6 py-10 mx-auto flex flex-col">
            <div className="flex w-full gap-5 flex-col">
                <p className='font-medium text-orange-500 text-base tracking-wider'>DATOS DE FACTURACION</p>
                <div className='flex gap-5'>
                    <div className="relative z-0 w-full mb-6 group">
                    
                        <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                        required=""
                        />
                        <label
                        htmlFor="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                        Nombre
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                        required=""
                        />
                        <label
                        htmlFor="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                        Apellido
                        </label>
                    </div>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required=""
                />
                <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                Telefono - 11 9999 9999
                </label>
            </div>

            <div>
                <p className='font-medium text-orange-500 text-base tracking-wider mt-4 mb-2'>DATOS DE ENVIO</p>
            </div>
                <div className='flex gap-5'>
                    <Input type="text" name="street" id="street" htmlF="street" text="Calle" />
                    <Input type="text" name="street-ref" id="street-ref" htmlF="street-ref" text="Altura" />
                </div>
                
                <div className='flex gap-5'>
                    <Input type="text" name="location" id="location" htmlF="location" text="Localidad" />
                    <Input type="text" name="zip-code" id="zip-code" htmlF="zip-code" text="Codigo Postal" />                  
                </div>
           
            <p className='font-medium text-orange-500 text-base tracking-wider mt-4'>METODOS DE PAGO</p>
            <select  onChange={(e)=>{setPaymentMethod(e.target.value)
            console.log(e.target.value)}} id="methodPayment" className="mb-6 bg-gray-50 border w-1/3 border-gray-300 text-gray-500 mt-4 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                <option defaultValue>Seleccionar Método</option>
                <option value="MP">MercadoPago</option>
                <option value="debit-credit">Tarjeta de Debito/Credito</option>
                <option value="transfer">Transferencia</option>
                
            </select>

            {paymentMethod=="MP" && <h2 className='mt-4 text-sm text-gray-500 mb-6'>Nota: Al confirmar, se abrirá una ventana emergente de MercadoPago para finalizar la operación.</h2> }
            {paymentMethod=="debit-credit" && 
            <div className='flex flex-col w-full justify-between gap-5 mb-6'>
                <div className='flex gap-5'>
                    <Input type="text" name="full-name" id="card-number" htmlF="card-number" text="Nombre en la tarjeta" />
                    <Input type="text" name="DNI" id="DNI" htmlF="DNI" text="DNI" />
                </div>
                <div className='flex gap-5'>
                    <Input type="text" name="card-number" id="card-number" htmlF="card-number" text="Número de tarjeta" />
                    <Input type="text" name="card-date" id="card-date" htmlF="card-date" text="mm / aa" />
                    <Input type="text" name="card-cvc" id="card-cvc" htmlF="card-cvc" text="CVC" />
                </div>
                
            </div>}
            {paymentMethod=="transfer" && 
            <div className=' mb-4'>
                <h2 className='text-base text-orange-500'>Datos de transferencia:</h2>
                <p className='text-sm text-gray-500'>Banco Santander</p>
                <p className='text-sm text-gray-500'>CBU: 0000000000000000000000</p>
                <p className='text-sm text-gray-500'>Cuenta: 99999/99</p>
                <p className='mt-4 text-gray-600 text-sm'>Adjuntar el comprobante bancario al finalizar.</p>
            </div>
            }
            <button
            type="submit"
            className="text-white w-44 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto"
            >
            Corfirmar
            </button>
            
            

        </form>
            </div>

            <div className='w-1/4 bg-white rounded-xl relative'>

                <Cart />
            
            </div>
        </div>
    </div>
  )
}

export default CartShopp
