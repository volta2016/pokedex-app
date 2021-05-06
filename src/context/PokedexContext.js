import React, { createContext, useState, useEffect } from "react";
import { API } from "../config/api";
import { useFetch } from "../hooks/useFetch";

export const PokedexContext = createContext();

const PokedexContextProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [getAllPokemons] = useFetch(API.all, {});
	const [getPokemon] = useFetch(API.single); // rename => pokemons
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [searching, setSearching] = useState(false);

	const fetchPokemon = async () => {
		const data = await getAllPokemons({
			limit: 25,
			offset: 25 * page,
		});
		const promises = data.results.map(async (pokemon) => {
			return await getPokemon({ pokemonName: pokemon.name });
		});
		const pokemonsResult = await Promise.all(promises);

		setPokemons(pokemonsResult);
		setLoading(false);
		// console.log(pokemonsResult);
		setTotal(Math.ceil(data.count / 25));
		setNotFound(false);
	};

	useEffect(() => {
		if (!searching) {
			fetchPokemon();
		}
	}, [page]); //eslint-disable-line

	const previusPage = () => {
		const nextPage = Math.max(page - 1, 0);
		setPage(nextPage);
	};

	const nextPage = () => {
		const nextPage = Math.min(page + 1, total - 1);
		setPage(nextPage);
	};

	//logica SearchBar
	const onSearch = async (pokemon) => {
		if (!pokemon) {
			return fetchPokemon();
		}
		setLoading(true);
		setNotFound(false);
		setSearching(true);
		const results = await getPokemon({ pokemonName: pokemon });
		if (!results) {
			setNotFound(true);
			setLoading(false);
		} else {
			setPokemons([results]);
			console.log(results);
			setNotFound(false);
		}
		setTotal(1);
		setPage(0);
		setLoading(false);
		setSearching(false);
	};

	return (
		<PokedexContext.Provider
			value={{
				pokemons,
				notFound,
				loading,
				page,
				total,
				onSearch,
				previusPage,
				nextPage,
			}}
		>
			{children}
		</PokedexContext.Provider>
	);
};

export default PokedexContextProvider;

// ::dejar la inicialización de estado y fetch disponible para usar en los consumidores
//child
