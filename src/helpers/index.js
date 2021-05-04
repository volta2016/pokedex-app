// import { base_url } from "../constants";

export const getPokemon = async (pokemon) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {}
};

//obtenemos los primero 10 pokemones cuando comenzamos nuestra App
//una vez me regresa el getAllPokemons yo puedo hacer
//const data = await response.json(); que me regresa una array
//const promises va ser nuestro arrays de promesas.
export const getAllPokemons = async (limit = 10, offset = 0) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset${offset}`;
		const response = await fetch(url);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (err) {}
};

// cada pokeomon tiene como {} el nombre y la url asi que podemos pasar de una la ulr
export const getPokemonData = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log(err);
	}
};

//promise all > espera un array de promesas lo que va hacer esperar ante de continuar
//con nuestro code
