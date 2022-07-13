import Input from '../Components/Input'
import { useForm } from "react-hook-form";

const RegisterForm = () => {

    const {handleSubmit, register,formState:{errors},getValues} = useForm()

    const pattern = {patternEmail: {
        value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
        message: "Formato de email invalido"
        },
        patternPhone:{
            value:/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
            message: "Formato de telefono incorrecto"
        }
    }

    const minLength = {
        value: 5,
        message: "Contraseña muy corta"
    }
    const maxLength = {
        value: 12,
        message: "Contraseña muy larga"
    }

    const validate = {
        validatePass: {
            equals: (v) =>
                v === getValues("password") ||
                "No coinciden las contraseñas",
        },
        validateTrim:{ 
            trim: (v) => {
                if (!v.trim()) {
                    return "La contraseña no puede estar en blanco";
                }
                return true;
            }
        }
    }

    const onSubmit = (data)=>{
        console.log(data)
    }
    
  return (
    <>
        <form  onSubmit={handleSubmit(onSubmit)} className="w-1/4 mx-auto m-10  flex flex-col sm:w-3/4 md:w-2/6">
            <div className="relative z-0 w-full mb-4 group">
                <Input type="email" id="email" htmlF="email" text="Dirección de correo" label="email" register={register} required="Campo requerido" pattern={pattern.patternEmail}/>
                {errors.email && <p className=' text-sm text-orange-700 font-medium'>{errors.email.message}</p>}
            </div>
            
            <div className="relative mb-4 z-0 w-full group">
                <Input type="password" id="password" htmlF="password" text="Contraseña" label="password" register={register} required="Campo requerido" minLength={minLength} maxLength={maxLength} validate={validate.validateTrim} setValueAs={(v) => v.trim()}/>
                {errors.password && <p className=' text-sm text-orange-700 font-medium'>{errors.password.message}</p>}
            </div>

            <div className="relative mb-4 z-0 w-full group">
                <Input type="password" id="repassword" htmlF="repassword" text="Repetir contraseña" label="repassword" register={register} required="Campo requerido" validate={validate.validatePass} setValueAs={(v) => v.trim()}/>
                {errors.repassword && <p className=' text-sm text-orange-700 font-medium'>{errors.repassword.message}</p>}
            </div>
            
            <div>
                <div className="flex w-full gap-5">
                    <div className="relative z-0 w-full mb-6 group">
                        <Input type="text" id="first_name" htmlF="first_name" text="Nombre" label="first_name" register={register} required="Campo requerido"/>
                        {errors.first_name && <p className='mb-1 text-sm text-orange-700 font-medium'>{errors.first_name.message}</p>}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <Input type="text" id="last_name" htmlF="last_name" text="Apellido" label="last_name" register={register} required="Campo requerido"/>
                        {errors.last_name && <p className='mb-1 text-sm text-orange-700 font-medium'>{errors.last_name.message}</p>}
                    </div>
                </div>
            </div>
            <div>
                <div className="relative z-0 w-full mb-6 group">
                    <Input type="tel" id="phone" htmlF="phone" text="Telefono - 11 9999 9999" label="phone" register={register} required="Campo requerido" pattern={pattern.patternPhone} setValueAs={(v) => v.trim()}/>
                    {errors.phone && <p className='mb-1 text-sm text-orange-700 font-medium'>{errors.phone.message}</p>}
                </div>
            </div>

            <button
            type="submit"
            className="text-white w-44 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto"
            >
            Corfirmar
            </button>

        </form>
    </>

  )
}

export default RegisterForm
