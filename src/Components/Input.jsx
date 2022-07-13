

const Input = ({type,id,htmlF,text,label,register,required,pattern,minLength,maxLength,validate,setValueAs}) => {

  return (
    <div className="relative z-0 w-full mb-2 group">
        <input
            type={type}
            id={id}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            {...register(label,{required,pattern,minLength,maxLength,validate,setValueAs})}
                
        />
        <label
            htmlFor={htmlF}
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
        {text}
        </label>
        
    </div>
  )
}

export default Input
