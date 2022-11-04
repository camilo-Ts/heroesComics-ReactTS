import { FormEvent, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks'
import { ListItem } from '../components/ListItem'
import { getHerosByName } from '../helpers'
import queryString from 'query-string'

interface FormData {
    searchText:string
}

export const Search = () => {
    // const heroes = getHerosByName()
    const location = useLocation()
    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null)
    const {q = ""} = queryString.parse(location.search)
    const heroes = getHerosByName(q+'')
    const {searchText, changeValue} = useForm<FormData>({searchText:q+''})

    const onSubmit = (evt: FormEvent<HTMLElement>) => {
        evt.preventDefault()
        navigate(`?q=${searchText}`)
    }
    useEffect(() => {
        inputRef.current?.focus()
    }, [heroes])
    return (
        <div>
            <h1>Buscar</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscador</h4>
                    <hr />
                    <form onSubmit={onSubmit}>
                        <input ref={inputRef} value={searchText} name="searchText" onChange={changeValue}type="text" className="form-control" placeholder='Buscar un héroe' />
                        <button className="btn btn-outline-primary">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados...</h4>
                    <hr />
                    {/* <div className="alert alert-danger">No se ha encontrado heroes <b>s</b></div> */}
                    {/* <div className="alert alert-primary">Busca un Héroe</div> */}
                    {
                        heroes.map(hero => (
                            <ListItem key={hero.id} hero={hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}