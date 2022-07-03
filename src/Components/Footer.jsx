

const Footer = () => {
  return (
    <div className="bg-blackp w-full h-64 px-72 pt-12 flex sm:text-xs bottom-0">
      <div className="flex flex-col gap-5 w-3/4 mt-6">
        <h2 className="text-xl tracking-widest font-extrabold text-white sm:text-sm">ECOMMERCE</h2>
        <p className="text-sm text-gray-200 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti hic ipsum magni commodi repellat laborum alias iste fuga nihil, fugit quis quos voluptatum sunt repudiandae nesciunt quibusdam quas velit ipsa!
        Eos, voluptatibus adipisci quo officiis, vitae facere maiores odit expedita sed quos mollitia natus culpa labore libero voluptatum perspiciatis assumenda? Hic eaque impedit.</p>
      </div>
      <ul className="text-white mt-10 flex h-6 gap-5 w-full justify-end sm:gap-2 sm:grid sm:grid-cols-2 sm:content-center sm:justify-items-center">
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal text-sm relative">CONTACTO</li>
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal text-sm relative">NUESTRAS SUCURSALES</li>
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal text-sm relative">COMPRA ONLINE</li>
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal text-sm relative">ENVIOS A TODO EL PAIS</li>
        
      </ul>
    </div>
  )
}

export default Footer
