import Button from '../Button'
import React from 'react'

const ItemCarrousel = ({marca,titulo,texto,imagen}) => {
  return (
    <div className='flex w-full h-full  ml-52 mr-36 items-center sm:ml-0 sm:mr-0 sm:flex-col'>
      <div className='max-w-lg sm:mx-10 sm:text-justify'>
        <span className='text-gray-400 text-md'>{marca}</span>
        <h2 className='text-gray-200 font-medium text-4xl mt-2 sm:text-left'>{titulo}</h2>
        <p className='text-gray-300 mt-2 text-base'>{texto}</p>
        <Button
          type="button"
          text="VER PRODUCTO"
           />
      </div>
     
      <img className='img-logi ml-auto sm:h-96 sm:mx-auto' src={imagen} alt={`${marca +" "}${titulo}`} />
    </div>
  )
}

export default ItemCarrousel
