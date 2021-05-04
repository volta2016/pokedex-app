import { useState } from "react";

export const useFetch = (
	endpoint,
	initialData,
	options = { methods: "GET", to: "json" }
) => {
	const [data, setData] = useState(initialData);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ haveError: false, errorInfo: null });

	const fetchEndpoint = async (fetchParams) => {
		try {
			setLoading(true);
			const responseTo = options.to ? options.to : "json";
			const url =
				endpoint instanceof Function ? endpoint(fetchParams) : endpoint;

			const response = await fetch(url, options);
			const newData = await response[responseTo]();

			setData(newData);
			setLoading(false);

			return newData;
		} catch (error) {
			setError({ ...error, haveError: true, erroInfo: error });
		}
	};

	return [fetchEndpoint, data, loading, setLoading, error];
};
