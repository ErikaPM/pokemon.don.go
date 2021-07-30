import getArray from "../utils/getArray";


const Home = async() => {
    const characters = await getArray();
    console.log(characters)
    const view = `
      <div class="characters">
      ${characters.map((character) => `
        <article class="character-item">
          <a href="#/${character.id}/">
            <img class= "home-img" src="${character.sprites.other.dream_world.front_default}" alt="${character.name}"/>
            <h2 class ="character-name" alt"character-name" >${character.name}</h2>
          </a>
        </article>
      `).join('')}
    `;
    return view;
};
  
export default Home;
