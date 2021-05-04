import React from "react";

const PokemonDetails = ({ ...pokemon }) => {
	const imgData = pokemon.sprites.front_default;

	return (
		<>
			<h3>{pokemon.name}</h3>
			<img src={imgData} alt={pokemon.name} />

			<p>
				<strong>height: </strong>
				{pokemon.height}
			</p>
			<p>
				<strong>weight: </strong>
				{pokemon.weight}
			</p>
		</>
	);
};

export default PokemonDetails;

// {
// 	/* <img src={pokemon.sprites.other.dream_world.front_default} alt={name} />; */
// }
