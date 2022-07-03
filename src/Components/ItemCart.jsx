import React from 'react'

const ItemCart = ({image, name, price, quantyCart}) => {
  return (
    <div className='flex gap-4 items-center py-2 px-2 justify'>
      <img className=' w-14' src={image} alt={`${name}+"-cart`} />
      <div className='flex flex-col gap-2'>
        <h2 className='text-xs font-semibold text-blackp'>{name}</h2>
        <p className='text-sm'>${price}</p>
      </div>
      <p className='text-orange-400 font-medium text-sm mr-2 ml-auto'>x{quantyCart}</p>
    </div>
  )
}

export default ItemCart
