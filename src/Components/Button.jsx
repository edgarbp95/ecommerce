

const Button = ({type,text,onClick}) => {
  return (
    <>
     <button
        className="h-12 w-40 bg-orange-400 hover:bg-orange-500 duration-500 mt-4 text-gray-50 font-normal text-sm"
        type={type}
        onClick={onClick}

        >{text}</button>
    </>
  )
}

export default Button
