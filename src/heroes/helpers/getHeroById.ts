import { heroes } from "../data/data"
import { Hero } from "../interfaces/interfaces"

export const getHeroById = (id:string) => {
    const myHero = heroes.find((hero) => hero.id === id)
    if (!myHero) {
        throw new Error("El héroe no existe")
    }
    return myHero
}