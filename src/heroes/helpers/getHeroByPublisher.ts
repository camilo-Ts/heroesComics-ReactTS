import { heroes } from "../data/data";
import { Publisher } from "../interfaces/interfaces";

export const getHeroByPublisher = (publisher?:Publisher) => {
    const validPublisher = ["DC Comics", "Marvel Comics"]
    if (publisher) {
        
        if (!validPublisher.includes(publisher)) throw new Error('No existe ese publisher')

        return heroes.filter(hero => hero.publisher === publisher)
    }
    return heroes
}