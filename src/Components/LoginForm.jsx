

const LoginForm = () => {
  return (
      <form className="w-1/4 mx-auto m-10  flex flex-col sm:w-3/4">
            <div className="relative z-0 w-full mb-6 group">
            <input
                type="email"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required=""
            />
            <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Dirección de correo
            </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required=""
            />
            <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Contraseña
            </label>
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
