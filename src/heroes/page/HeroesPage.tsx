import { List } from "../components"
import { getHeroByPublisher } from "../helpers"

export const HeroesPage = () => {
    const heroes = getHeroByPublisher()
    return (
        <div>
            <h1>Heroes</h1>
            <hr />
            <List heroes={heroes}/>
        </div>
    )
}
