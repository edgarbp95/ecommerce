

const Footer = () => {
  return (
    <div className="bg-blackp w-full h-36 items-center flex sm:text-xs">
      <ul className="text-white flex gap-5 w-full items-center justify-center sm:gap-2 sm:grid sm:grid-cols-2 sm:content-center sm:justify-items-center">
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal relative">CONTACTO</li>
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal relative">NUESTRAS SUCURSALES</li>
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal relative">COMPRA ONLINE</li>
        <li className="nav_menu_option cursor-pointer hover:text-orange-400 font-normal relative">ENVIOS A TODO EL PAIS</li>
      </ul>
    </div>
  )
}

export default Footer
