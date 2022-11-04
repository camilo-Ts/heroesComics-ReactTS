import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import { Navbar } from '../../components'
import { HeroesPage, MarvelPage, DCPage, Search, Prueba, HeroPage } from '../page'

export const HeroesRouter = () => {
    const location = useLocation()
    const {pathname} = location
    console.log(pathname)
    localStorage.setItem('lastPath', pathname)
    return (
        <>
            <Navbar/>

            <div className='container'>
                <Routes>
                    <Route path='' element={<HeroesPage/>}/>
                    <Route path='/marvel' element={<MarvelPage/>}/>
                    <Route path='/dc' element={<DCPage/>}/>
                    <Route path='/hero/:id' element={<HeroPage/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/prueba' element={<Prueba/>}/>
                    <Route path='/*' element={<Navigate to={''}/>}/>
                    {/* <Route path='/*' element={<Navigate to={'heroes'}/>}/> */}
                </Routes>
            </div>
        </>
    )
}
