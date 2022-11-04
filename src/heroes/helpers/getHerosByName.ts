import { heroes } from "../data/data"

export const getHerosByName = (word:string) => {
    const name = word.toLowerCase().trim()
    if ( name === '') return []
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}