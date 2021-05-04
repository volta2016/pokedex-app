import React from "react";

export const SVG = {
	LeftArrow: (props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 21 21"
				width="28"
				height="28"
				{...props}
			>
				<path
					d="M11.5 14.5l-4-4 4-4"
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
	RightArrow: (props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 21 21"
				width="28"
				height="28"
				{...props}
			>
				<path
					d="M9.5 14.5l4-4-4-4"
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
};
