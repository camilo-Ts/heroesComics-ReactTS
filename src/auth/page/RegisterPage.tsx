import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useAuthStore } from '../../hooks/useAuthStore'
import { User } from '../../interfaces/interfaces'

export const RegisterPage = () => {
    const {changeValue, formState, email, } = useForm<User>({
        email:'',
    })

    const navigate = useNavigate()
    const { startLogin} = useAuthStore()

    const backPage = () => {
        navigate('/auth/login')
    }
    const onSubmit = (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        startLogin(formState)
    }

    return (
        <div className='container vh-100 row align-items-center justify-content-center m-auto text-center'>
            <form onSubmit={onSubmit} className='col-6 p-5 pb-1 formPage register'>
                <h3></h3>
                <input className='form-control mb-3' type="text" placeholder='Nombre' required/>
                <input onChange={changeValue} name="email" value={email} className='form-control mb-3' type="email" placeholder='Correo' required/>
                <input autoComplete='off' className='form-control mb-3' type="password" placeholder='Contraseña' required/>
                <input autoComplete='off' className='form-control mb-3' type="password" placeholder='Repita su contraseña' required/>
                <div>
                    <button type='button' onClick={backPage} className='button btn-reg r mt-5'>Cancelar</button>
                    <button type='submit' className='button btn-reg n mt-5'>Crear Cuenta</button>
                </div>
            </form>
        </div>
    )
}
