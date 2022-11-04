import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const hero = getHeroById(""+id)

    const navigateBack = () => {
        if (hero.publisher === 'DC Comics') return navigate('/dc')
        if (hero.publisher === 'Marvel Comics') return navigate('/marvel')
        return navigate('')
    }
    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img src={`../../../assets/heroes/${hero.id}.jpg`} alt="" className='img-thumbnail'/>
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Alter Ego</strong> {hero.alter_ego}</li>
                    <li className='list-group-item'><strong>Editor(a)</strong> {hero.publisher}</li>
                    <li className='list-group-item'><strong>Primera Aparición</strong> {hero.first_appearance}</li>
                </ul>
                <h5 className='mt-3'>Han usado el traje</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-primary" onClick={navigateBack}>Volver</button>
            </div>
            
        </div>
    )
}
