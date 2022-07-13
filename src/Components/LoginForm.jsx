import { useForm } from "react-hook-form"
import Input from "./Input"


const LoginForm = () => {

    const {handleSubmit,register} = useForm();

    const onSubmit = (data)=>{
        console.log(data)
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/4 mx-auto m-10  flex flex-col sm:w-3/4 md:w-2/6">
            <div className="relative z-0 w-full mb-6 group">
            <Input type="email" id="user" htmlF="user" text="Usuario" label="user" register={register} required="Campo requerido"/>
            </div>

            <div className="relative z-0 w-full mb-6 group">
            <Input type="password" id="loginPassword" htmlF="loginPassword" text="Contraseña" label="loginPassword" register={register} required="Campo requerido"/>
            </div>

            <a className="text-sm text-orange-500 hover:underline dark:text-orange-500 relative h-6 w-36 font-medium " href="">Recuperar contraseña</a>
            <button
            type="submit"
            className="text-white w-44 mt-8 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto"
            >
            Confirmar
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300 mt-6">
            Not registered? <a href="#" class="text-orange-500 hover:underline dark:text-orange-500">Create account</a>
            </div>
        </form>
  )
}

export default LoginForm
