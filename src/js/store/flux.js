const getState = ({ getStore, getActions, setStore }) => {

	const API_URL = "https://swapi.dev/api";

	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},

		actions: {
			getCharacters: () => {
				fetch(`${API_URL}/people/`)
					.then(res => res.json())
					// .then(data => console.log(data))
					.then((data) => {
						
						console.log("Fetched Character from API: ", data)
						setStore({ character: data.results})
					})
					.catch(err => console.error(err))
			}

		}
	}
};

export default getState;
