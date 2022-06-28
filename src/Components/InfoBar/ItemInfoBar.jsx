

const ItemInfoBar = ({img, info, text, href}) => {
  return (
    <div className="prueba flex gap-3 ">
      <img className="h-12" src={img} alt="" />
      <div>
        <h2 className="font-medium text-base ">{info}</h2>
        <a className=" nav_menu_option pb-1 text-orange-400 hover:text-orange-500 hover:border-orange-500 duration-200 text-sm font-medium relative" href={href}>{text}</a>
      </div>
    </div>
  )
}

export default ItemInfoBar
