import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Logo from "../../assets/img/pokeball.svg";
import SearchBar from "./SearchBar";
import { FavoriteContext } from "../../context/FavoriteContext";

const NavBar = () => {
	const { favoritePokemons } = useContext(FavoriteContext);

	return (
		<>
			<nav className="navbar flex">
				<Link to="/">
					<h1>Pokédex</h1>
					<img src={Logo} alt="poke ball" />
				</Link>
				<span className="navbar__favorite" role="img" aria-label="smile">
					💛 <span>{favoritePokemons.length}</span>
				</span>
				<ul className="navbar__menu">
					<Link to="/About">
						<li>About App</li>
					</Link>
					<Link to="/PokeApi">
						<li>Api Pokémon</li>
					</Link>
				</ul>
			</nav>
			<SearchBar />
		</>
	);
};
export default NavBar;
