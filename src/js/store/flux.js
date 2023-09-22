const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: []
		},
		actions: {
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({people: data["result"]}))
				.catch(err => console.log(err))
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({starships: data["results"]}))
				.catch(err => console.log(err))
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets: data["result"]}))
				.catch(err => console.log(err))
			}
		}
	}
};

export default getState;
