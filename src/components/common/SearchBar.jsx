import React, { useState, useContext } from "react";
import iconSearch from "./../../assets/img/search.svg";
// import { API } from "../../config/api";
// import { useFetch } from "../../hooks/useFetch";

import { PokedexContext } from "../../context/PokedexContext";

const SearchBar = () => {
	const { onSearch } = useContext(PokedexContext);
	const [search, setSearch] = useState("");

	const onChange = (e) => {
		setSearch(e.target.value);
		if (e.target.value.length === 0) {
			onSearch(null);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(search);
		onSearch(search);
	};

	return (
		<form>
			<div className="search">
				<input
					type="text"
					value={search}
					onChange={onChange}
					placeholder="Busca tu Pokémon"
				/>
				<button type="submit" onClick={handleSubmit}>
					<img className="search__btn" src={iconSearch} alt="button search" />
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
