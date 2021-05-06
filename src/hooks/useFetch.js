import { useState } from "react";

export const useFetch = (
	endpoint,
	initialData,
	options = { methods: "GET", to: "json" }
) => {
	const [data, setData] = useState(initialData);
	const [error, setError] = useState({ haveError: false, errorInfo: null });

	const fetchEndpoint = async (fetchParams) => {
		try {
			const responseTo = options.to ? options.to : "json";
			const url =
				endpoint instanceof Function ? endpoint(fetchParams) : endpoint;

			const response = await fetch(url, options);
			const newData = await response[responseTo]();
			console.log(newData);
			setData(newData);

			return newData;
		} catch (error) {
			setError({ ...error, haveError: true, erroInfo: error });
		}
	};

	return [fetchEndpoint, data, error];
};
