import { Link } from 'react-router-dom'
import Cart from '../Components/Cart'
import CartForm from '../Components/CartForm'


const CartShopp = () => {

  return (
    <div className='flex flex-col gap-2 py-20 items-center w-full bg-gray-100 sm:py-10 '>
        <div className='flex w-3/4 sm:w-full md:w-full md:px-10'>
        <Link to="/"> 
            <p className='text-gray-500 hover:text-orange-400 hover:font-medium ml-2 mr-auto sm:ml-4'> Home </p>
        </ Link>
        </div>
        <div className='flex justify-between w-3/4 mx-auto gap-10 sm:flex-col sm:w-11/12 md:w-full md:px-10'>
            <CartForm />
            <div className='w-1/4 bg-white rounded-xl relative sm:w-full'>
            <Cart />
            <p className='absolute bottom-1 text-xs text-gray-500 left-6'>Cupones: XPRIMER, 30%OFF</p>
            </div>
        </div>
    </div>
  )
}

export default CartShopp
