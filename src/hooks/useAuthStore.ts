import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkingCredential, login, logout, RootState } from "../store";

interface User {
    email:string
}

export const useAuthStore = () => {
    const dispatch = useDispatch()
    const {email,status,id} = useSelector((state:RootState) => state.auth)
    
    const startLogin = ({email}:User) => {
        dispatch(checkingCredential())
        dispatch(login(email))
    }
    const startLogout = () => {
        dispatch(checkingCredential())
        dispatch(logout())
    }
    return {
        //* Function
        startLogin,
        startLogout,
        //* Variables - Const
        email,
        status,
        id
    };
};
