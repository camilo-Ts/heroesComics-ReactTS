import React, { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useAuthStore } from '../../hooks/useAuthStore'
import { User } from '../../interfaces/interfaces'



export const LoginPage = () => {
    const {changeValue, formState, email, } = useForm<User>({
        email:'',
    })
    const {startLogin, status} = useAuthStore()
    const navigate = useNavigate()
    
    const buttonState = status === 'checking'
    
    const onLogin = (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        if(email.length <= 0)
        console.log('first')
        startLogin(formState)
        const lastPath = localStorage.getItem('lastPath') || '/'
        navigate(lastPath)

    }
    return (
        <div className='container vh-100 row align-items-center justify-content-center m-auto text-center'>
            <form className='col-6 p-5 pb-0 formPage' onSubmit={onLogin}>
                <input onChange={changeValue} name="email" value={email} className='form-control mb-3' type="email" placeholder='Correo' required/>
                <input name="password" className='form-control mb-3' type="password" autoComplete='off' placeholder='Contraseña' required/>
                <button className='button n w-100 mt-3' disabled={buttonState}>Iniciar sesión</button>
                <pre className='mt-3'>¿No tienes una cuenta? <span><Link to={'/auth/register'}>Regístrate</Link></span></pre>
            </form>
        </div>
    )
}
