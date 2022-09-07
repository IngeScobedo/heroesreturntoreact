import { getHeroesByPublisher } from "../helpers"
import { Hero } from "../pages";

export const HeroList = () => {
    const heroes = getHeroesByPublisher('Marvel Comics');
    return (
        <div className="w-full flex gap-1 flex-wrap">
            {
                heroes.map(heroData => <Hero key={heroData.id} hero={heroData} />)
            }
        </div>
    )
}
