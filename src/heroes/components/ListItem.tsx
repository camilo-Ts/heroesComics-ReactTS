import React from 'react'
import { NavLink } from '../../components'
import { Hero } from '../interfaces/interfaces'

type props = {
    hero:Hero
}

// export const ListItem = () => {
export const ListItem = ({hero}:props) => {
    // const hero: Hero = {
    //     id: "dc-arrow",
    //     superhero: "Green Arrow",
    //     publisher: "DC Comics",
    //     alter_ego: "Oliver Queen",
    //     first_appearance: "More Fun Comics #73",
    //     characters: "Oliver Queen",
    // }
    return (
        <div className='card'>
            <div className='row'>
                <div className="col-4">
                    <img src={`../../../assets/heroes/${hero.id}.jpg`} className={'card-img'} alt="" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p>{hero.alter_ego}</p>
                        <p style={{ color: "#878787" }}><small>{hero.first_appearance}</small></p>
                        <NavLink to={`/hero/${hero.id}`}>Mas...</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
