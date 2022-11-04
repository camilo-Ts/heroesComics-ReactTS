import React from 'react'
import { List } from '../components'
import { getHeroByPublisher } from '../helpers'

export const DCPage = () => {
    const heroes = getHeroByPublisher('DC Comics')
    return (
        <div>
            <h1>DC</h1>
            <hr />
            <List heroes={heroes}/>
        </div>
    )
}