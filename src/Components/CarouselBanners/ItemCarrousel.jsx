import Button from '../Button'
import React from 'react'
import { Link } from 'react-router-dom'

const ItemCarrousel = ({name,texto,imagen,marca}) => {
  return (
    <div className='flex w-full h-full  ml-52 mr-36 items-center sm:ml-0 sm:mr-0 sm:flex-col sm:mt-6 md:ml-16 md:mr-0'>
      <div className='max-w-lg sm:mx-10 sm:text-justify'>
        <span className='text-gray-400 text-md'>{marca}</span>
        <h2 className='text-gray-200 font-bold text-3xl mt-2 sm:text-left sm:text-2xl'>{name}</h2>
        <p className='text-gray-300 mt-2 text-base sm:text-sm'>{texto}</p>
        <Link to={`/${name}`}>
        <Button
          type="button"
          text="VER PRODUCTO"
          clase="sm:text-xs h-10 "
          
           />
        </Link>
      </div>
     
      <img className='img-logi ml-auto sm:h-96 sm:mx-auto' src={imagen} alt={`${marca +" "}${name}`} />
    </div>
  )
}

export default ItemCarrousel
