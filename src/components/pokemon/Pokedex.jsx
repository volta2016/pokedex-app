import { useContext } from "react";

import { PokedexContext } from "../../context/PokedexContext";

import NotFound from "../pokemon/NotFound";
import Loader from "../pokemon/Loader";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = () => {
	const { pokemons, notFound, loading } = useContext(PokedexContext);

	return (
		<>
			{notFound ? (
				<NotFound />
			) : (
				<>
					<div className="center">
						<h2>Pokédex</h2>
						<Pagination />
					</div>
					{loading && <Loader />}
					<div className="pokedex-grid">
						{pokemons &&
							pokemons.map((pokemon, idx) => {
								return <Pokemon key={pokemon.name} pokemon={pokemon} />;
							})}
					</div>
				</>
			)}
		</>
	);
};

export default Pokedex;
