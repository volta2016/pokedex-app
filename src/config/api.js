export const BASE_URL = "https://pokeapi.co/api/v2";

export const API = {
	all: ({ limit, offset } = { limit: 20, offset: 0 }) =>
		`${BASE_URL}/pokemon/?limit=${limit}&offset=${offset}`,
	single: ({ pokemonName }) => `${BASE_URL}/pokemon/${pokemonName}`,
};
