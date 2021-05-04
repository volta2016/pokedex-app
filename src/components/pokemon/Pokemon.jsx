import React, { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import Modal from "../pokemon/Modal";
import PokemonDetails from "../pokemon/PokemonDetails";
import useModal from "../../hooks/useModal";

const Pokemon = ({ pokemon }) => {
	const { favoritePokemons, updateFavoritePokemons } = useContext(
		FavoriteContext
	);
	const { modal, handleCloseModal, handleOpenModal } = useModal();

	const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

	const redHeart = "❤️";
	const yellowHeart = "💛";
	const heart = favoritePokemons.includes(pokemon.name)
		? yellowHeart
		: redHeart;

	const clickHeart = (e) => {
		e.preventDefault();
		updateFavoritePokemons(pokemon.name);
	};

	return (
		<div className={`pokemon-card ${types[0]} bounceIn`}>
			<div className="pokemon-card__img-container">
				<img
					className="pokemon-img"
					src={pokemon.sprites.other.dream_world.front_default}
					alt={pokemon.name}
				/>
			</div>
			<div className="pokemon-card__card-body">
				<div className="card-top">
					<div>
						<h3>{pokemon.name}</h3>
						<b>#{pokemon.id}</b>
					</div>
					<button onClick={handleOpenModal}>more details</button>
				</div>
				<div className="card-bottom">
					<div className="pokemon-type">
						{pokemon.types.map((type, idx) => {
							return (
								<div key={idx} className="pokemon-type-text">
									<p>{type.type.name}</p>
								</div>
							);
						})}
					</div>
					<button onClick={clickHeart} className="pokemon-heart-btn">
						<div className="pokemon-favorite">{heart}</div>
					</button>
				</div>
				<Modal isOpen={modal} onClose={handleCloseModal}>
					<PokemonDetails {...pokemon} />
				</Modal>
			</div>
		</div>
	);
};

export default Pokemon;
