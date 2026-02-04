const BASE_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";
const BASE_POKEMON_NAMES_URL = "https://pokeapi.co/api/v2/pokemon-species";

export async function getPokemonNames(url: string) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPokemonList(withNames = false) {
  try {
    const response = await fetch(`${BASE_POKEMON_URL}?limit=1000`);
    const { results } = await response.json();

    if (withNames) {
      await Promise.all(
        [],
        // results.map(async (pokemon) => {
        //   const nameData = await getPokemonNames(pokemon.species.url);
        //   return { ...pokemon, names: nameData };
        // }),
      );
    }

    return results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPokemon(id: number) {
  try {
    const response = await fetch(`${BASE_POKEMON_URL}/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
