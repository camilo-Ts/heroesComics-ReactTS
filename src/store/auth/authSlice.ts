import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Status = 'authenticated' | 'not-authenticated' | 'checking'

interface InitialState {
    status:Status,
    id:number,
    // name:string,
    email:string
}

const initialValue:InitialState = {
    status:'not-authenticated',
    id:0,
    // name:'',
    email:''
}

export const authSlice = createSlice({
    name:'auth',
    initialState: initialValue,
    reducers:{
        login:(state,action:PayloadAction<string>) => {
            state.status = "authenticated"
            state.id = 1
            // state.name = payload.name
            state.email = action.payload
        },
        logout:(state) => {
            state.status = 'not-authenticated'
            state.id = 0
            state.email = ''
        },
        checkingCredential:(state) => {
            state.status = 'checking'
        }
    }
})

export const {
    login,logout,checkingCredential
} = authSlice.actions