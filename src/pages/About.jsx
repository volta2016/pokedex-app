import React from "react";
import DiagramOne from "../assets/img/diagrams-context-solution.png";
import Comunication from "../assets/img/comunication-context.png";

const About = () => {
	return (
		<div className="container flex-start">
			<div className="col-12  px-lg-m">
				<h2>Context API</h2>
				<p>
					<i>
						<b>
							Context provides a way to pass data through the component tree
							without having to pass props manually at each level.
						</b>
					</i>
				</p>
				<p>
					In a typical React application, data is passed top-down (from parent
					component to child) through props, but this way can be cumbersome for
					certain types of props (example: localization, interface theme ) that
					are required by many components within an application. Context
					provides a way to share values like these between components without
					having to explicitly pass a prop through each level of the tree.
				</p>
				<p>
					That is the advantage of context to make available the states and
					functions that we want to use without having to pass props, if not
					that we use useContext and extract the data that we want to use in the
					specific component.
				</p>
			</div>
			<div className="col-12  px-lg-m">
				<h2>Diagrams and global state of the App</h2>
				<p>
					Create a diagram before creating the code, to have a solution on how
					to manage the global state of my app and be able to only make
					available the data in the necessary components. create 2 contexts so
					you don't have one with too much information. One with the Api and
					Pagination queries. The other with updating the favorite pokémon and
					saving data with LocalStorage for persistence.
				</p>
				<img className="imgres" src={DiagramOne} alt="Diagram Context" />
				<h2>Comunication Context</h2>
				<img
					className="imgres"
					src={Comunication}
					alt="comunication context diagram"
				/>
			</div>
		</div>
	);
};

export default About;
