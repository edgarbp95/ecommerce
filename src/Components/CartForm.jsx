import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Components/Input'

const CartForm = () => {

    const [paymentMethod, setPaymentMethod] = useState()

    const {handleSubmit,register} = useForm()

    const onSubmit = (data)=>{
        console.log(data)
    }

  return (
    <div className='w-3/4 bg-white rounded-xl sm:w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-5/6 py-10 mx-auto flex flex-col">
            <div className="flex w-full gap-5 flex-col">
                <p className='font-medium text-orange-500 text-base tracking-wider'>DATOS DE FACTURACION</p>
                <div className='flex gap-5'>
                    <div className="relative z-0 w-full mb-6 group">
                        <Input type="text" id="first-name" htmlF="first-name" text="Nombre" label="first-name" register={register} required="Campo requerido"/>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <Input type="text" id="last-name" htmlF="last-name" text="Apellido" label="last-name" register={register} required="Campo requerido"/>
                    </div>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <Input type="tel" id="phone-number" htmlF="phone-number" text="Telefono - 11 9999 9999" label="phone-number" register={register} required="Campo requerido"/>
            </div>
            <div>
                <p className='font-medium text-orange-500 text-base tracking-wider mt-4 mb-2'>DATOS DE ENVIO</p>
            </div>
                <div className='flex gap-5'>
                    <Input type="text" id="street" htmlF="street" text="Calle" label="street" register={register} required="Campo requerido"/>
                    <Input type="text" id="street-ref" htmlF="street-ref" text="Altura" label="street-ref" register={register} required="Campo requerido"/>
                </div>
                
                <div className='flex gap-5'>
                    <Input type="text" id="location" htmlF="location" text="Localidad" label="location" register={register} required="Campo requerido"/>
                    <Input type="text" id="zip-code" htmlF="zip-code" text="Codigo Postal" label="zip-code" register={register} required="Campo requerido"/>                
                </div>
           
            <p className='font-medium text-orange-500 text-base tracking-wider mt-4'>METODOS DE PAGO</p>
            <select  onChange={(e)=>{setPaymentMethod(e.target.value)}} id="payment-method" {...register("paymentMethod",{validate:{ valor: (v)=> v==="Seleccionar Método" ? false : true}})} className="mb-6 bg-gray-50 border w-1/3 sm:w-2/3 border-gray-300 text-gray-500 mt-4 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                <option defaultValue>Seleccionar Método</option>
                <option value="MP">MercadoPago</option>
                <option value="debit-credit">Tarjeta de Debito/Credito</option>
                <option value="transfer">Transferencia</option>
            </select>

            {paymentMethod=="MP" && <h2 className='mt-4 text-sm text-gray-500 mb-6'>Nota: Al confirmar, se abrirá una ventana emergente de MercadoPago para finalizar la operación.</h2> }
            {paymentMethod=="debit-credit" && 
            <div className='flex flex-col w-full justify-between gap-5 mb-6'>
                <div className='flex gap-5 sm:flex-col'>
                    <Input type="text" id="full-name" htmlF="full-name" text="Nombre en la tarjeta" label="full-name" register={register} required="Campo requerido"/>
                    <Input type="text" id="DNI" htmlF="DNI" text="DNI" label="DNI" register={register} required="Campo requerido"/> 
                </div>
                <div className='flex gap-5 sm:flex-col'>
                    <Input type="text" id="card-number" htmlF="card-number" text="Número de tarjeta" label="card-number" register={register} required="Campo requerido"/>
                    <Input type="text" id="card-date" htmlF="card-date" text="mm / aa" label="card-date" register={register} required="Campo requerido"/> 
                    <Input type="text" id="card-cvc" htmlF="card-cvc" text="CVC" label="card-cvc" register={register} required="Campo requerido"/> 
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

            <button className='h-10 w-full text-white mx-auto mt-4 bg-orange-400'>Confirmar</button>
            </form>
         </div>
  )
}

export default CartForm
