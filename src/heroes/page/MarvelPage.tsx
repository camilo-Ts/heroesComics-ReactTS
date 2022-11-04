import React from 'react'
import { List } from '../components'
import { getHeroByPublisher } from '../helpers'

export const MarvelPage = () => {
    const heroes = getHeroByPublisher('Marvel Comics')
    return (
        <div>
            <h1>Marvel</h1>
            <hr />
            <List heroes={heroes}/>
        </div>
    )
}
