import React, { useContext } from "react";
import { PokedexContext } from "../../context/PokedexContext";
import { SVG } from "../../constants/Arrow";

const Pagination = (props) => {
	const { page, total, previusPage, nextPage } = useContext(PokedexContext);

	return (
		<div className="pagination">
			<button className="pagination__btn" onClick={previusPage}>
				<div className="icon">
					<SVG.LeftArrow />
				</div>
			</button>
			<div>
				{page + 1} de {total}
			</div>
			<button className="pagination__btn" onClick={nextPage}>
				<div className="icon">
					<SVG.RightArrow />
				</div>
			</button>
		</div>
	);
};

export default Pagination;
