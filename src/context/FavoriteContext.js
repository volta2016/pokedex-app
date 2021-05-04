import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
	const [favoritePokemons, setFavoritePokemons] = useState(["raichu"]);
	const localStorageKey = "favorite_pokemon";

	const loadFavoritesPokemons = () => {
		const pokemons =
			JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
		setFavoritePokemons(pokemons);
	};

	useEffect(() => {
		loadFavoritesPokemons();
	}, []);

	const updateFavoritePokemons = (name) => {
		const updated = [...favoritePokemons];
		const isFavorite = updated.indexOf(name);
		// console.log(name);
		if (isFavorite >= 0) {
			updated.splice(isFavorite, 1);
		} else {
			updated.push(name);
		}
		setFavoritePokemons(updated);

		window.localStorage.setItem(localStorageKey, JSON.stringify(updated)); //json string
	};

	return (
		<FavoriteContext.Provider
			value={{ favoritePokemons, updateFavoritePokemons }}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export default FavoriteContextProvider;
