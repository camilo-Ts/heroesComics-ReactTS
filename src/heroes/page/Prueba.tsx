import React from 'react'
import { NavLink } from '../../components'
import { ListItem } from '../components/ListItem'
import { Hero } from '../interfaces/interfaces'
import {heroes} from './../data/data'
export const Prueba = () => {
    
    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <ListItem key={hero.id} hero={hero}/>
                ))
            }
        </div>
    )
}
