import React from "react"
import { NavLink as OrNavLink } from "react-router-dom"

type props = {
    children: JSX.Element | JSX.Element[] | string,
    to:string,
    className?:string
}

export const NavLink = ({children, to, className}:props) => {
    const activeStyle = {
        color:'#fff'
    }
    return (
        <OrNavLink className={className} to={to} style={({isActive}) => isActive ? activeStyle: undefined}>
            {children}
        </OrNavLink>
    )
}
