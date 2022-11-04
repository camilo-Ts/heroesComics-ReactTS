import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginRouter } from '../auth'
import { HeroesPage, HeroesRouter } from '../heroes'
import { useAuthStore } from '../hooks/useAuthStore'

export const AppRouter = () => {
    const {status} = useAuthStore()

    return (
        <Routes>
            {
                status === 'authenticated'
                ?<Route path='/*' element={<HeroesRouter/>}/>
                :<Route path='/auth/*' element={<LoginRouter/>}/>
            }
            <Route path='/*' element={<Navigate to={'/auth'}/>}/>
        </Routes>
    )
}
