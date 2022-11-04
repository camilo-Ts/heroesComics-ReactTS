import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore'
// import {NavLink} from 'react-router-dom'
import { NavLink } from './index'

export const Navbar = () => {
    const {email} = useAuthStore()
    const navigate = useNavigate()
    const {startLogout} = useAuthStore()
    const onLogout = () => {
        startLogout()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="">Asociaciones</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to={'/marvel'}>Marvel</NavLink>
                            <NavLink className="nav-link" to={'/dc'}>DC</NavLink>
                            <NavLink className="nav-link" to={'search'}>Buscar</NavLink>
                            {/* <a className="nav-link">Heroes</a> */}
                        </div>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                            <span className="nav-item nav-link text-info">
                                {email ? email: ''}
                            </span>
                            <button onClick={onLogout} className="nav-item nav-link btn">Logout</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
