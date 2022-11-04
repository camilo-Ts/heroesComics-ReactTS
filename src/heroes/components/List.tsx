import React from 'react'
import { Hero } from '../interfaces/interfaces'
import { ListItem } from './ListItem'

type props ={
    heroes:Array<Hero>
}

export const List = ({heroes}:props) => {
    return (
        <div className='row mt-1 row-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <ListItem key={hero.id} hero={hero}/>
                ))
            }
        </div>
    )
}
