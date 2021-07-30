import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <section class="container-character">
        <div class="characters-inner">
          <article class="characters-card-image">
              <img class= "home-img" src="${character.sprites.other.dream_world.front_default}" alt="${character.name}"/>
              <h2 class ="character-name" alt"character-name" >${character.name}</h2>
          </article>
          <article class="characters-card-info">
              <h3>Experience: ${character.base_experience}</h3>
              <h3>Abilities: ${character.abilities[0].ability.name}, ${character.abilities[1].ability.name}</h3>
              <h3>Moves: ${character.moves[0].move.name}, ${character.moves[0].move.name}</h3>
              <h3>Height: ${character.height}</h3>
              <h3>Weight: ${character.weight}</h3>
          </article>
        </div>
    </section>
  `;
  return view;
};

export default Character;