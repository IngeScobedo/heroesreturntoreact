import { heroes } from '../data/herodesc';

export const getHeroesByQuery = (query) => {
<<<<<<< HEAD
=======
    console.log(query, heroes)
>>>>>>> Heroes app completed
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(query));
}