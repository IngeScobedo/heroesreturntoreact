import { heroes } from '../data/herodesc';

export const getHeroesByQuery = (query) => {
    console.log(query, heroes)
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(query));
}