import React from 'react'
import LoginForm from '../Components/LoginForm'

const Login = () => {
  return (
    <div className='pt-32 pb-40 flex items-center flex-col bg-gray-100'>
      <h2 className='text-center text-blackp font-bold text-3xl'>Inicia Sesión</h2>
      <LoginForm />
      

    </div>
  )
}

export default Login
