import React from "react";
import Api from "../assets/img/api-pekemon.png";

const PokeAppi = () => {
	return (
		<div className="container flex-start">
			<div className="col-12  px-lg-m">
				<h2>PokéApi - RESTful Pokémon API</h2>

				<p>
					You can configure your endpoint looking for the name of the pokemon
					you need or passing parameters with the limit that is the amount of
					pokemon you need to bring or the offset that is the amount from where
					I want it to start looking for pokemon, if I configure a limit of 10
					and a offset of 30 will search from number 30 onwards and will bring
					10 pokemon.
				</p>
				<p>
					ver url{" "}
					<a className="color-pokesearch" href="https://pokeapi.co/">
						pokeapi.co
					</a>
				</p>
			</div>
			<div className="col-12 px-lg-m">
				<img className="imgres" src={Api} alt="Diagram Context" />
			</div>
		</div>
	);
};

export default PokeAppi;
