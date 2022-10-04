import { heroes } from '../data/herodesc';

export const getHeroesByQuery = (query) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(query, heroes)
>>>>>>> Heroes app completed
=======
>>>>>>> save last path and handle public and private routes
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(query));
}