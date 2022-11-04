import {useState, ChangeEvent} from 'react'

export const useForm = <T>(initialState:T) => {
    const [formState, setFormState] = useState<T>(initialState)

    const changeValue = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]:value
        })
    }
    return {
        ...formState,
        formState,
        changeValue
    }
}
