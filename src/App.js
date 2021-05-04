import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import PokeApi from "./pages/PokeAppi";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Pokedex from "./components/pokemon/Pokedex";
import FavoritePokemon from "./context/FavoriteContext";
import PokedexContextProvider from "./context/PokedexContext";
import "./assets/styles/App.scss";

const AppState = ({ children }) => (
	<PokedexContextProvider>
		<FavoritePokemon>{children}</FavoritePokemon>
	</PokedexContextProvider>
);

function App() {
	return (
		<AppState>
			<Router>
				<Header />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/pokeapi" component={PokeApi} />
					<Pokedex />
				</Switch>
				<Footer />
			</Router>
		</AppState>
	);
}

export default App;
