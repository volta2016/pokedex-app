import { useState, useRef, useEffect } from "react";
import initialState from "../constants/initialState";
import { fetchEndpoint } from "../hooks/useFetch";

const useInitialState = () => {
	const [pokemons, setPokemons] = useState([]);
	const [favoritePokemons, setFavoritePokemons] = useState([]);
	const [total, setTotal] = useState(0);
	const [favorites, setFavorites] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [searching, setSearching] = useState(false);

	const localStorageKey = "favorite_pokemon";

	const fetchPokemons = async () => {
		try {
			const data = await getPokemons(25, 25 * page);
			const promises = data.results.map(async (pokemon) => {
				return await fetchEndpoint(pokemon.url);
			});

			const results = await Promise.all(promises);
			setPokemons(results);
			setLoading(false);
			setTotal(Math.ceil(data.count / 25));
			setNotFound(false);
		} catch (err) {}
	};

	const loadFavoritePokemons = () => {
		const pokemons =
			JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
		setFavoritePokemons(pokemons);
	};

	useEffect(() => {
		loadFavoritePokemons();
	}, []);

	useEffect(() => {
		if (!searching) {
			fetchPokemons();
		}
	}, [page]);

	return {
		// state function
	};
};

export default useInitialState;
