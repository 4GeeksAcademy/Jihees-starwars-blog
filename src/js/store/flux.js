import { redirect } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
  const API_URL = "https://swapi.dev/api";

  const handleResponse = (response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.text().then(text => text ? JSON.parse(text) : {});
  };

  const refreshFavorites = () => {
    setStore({ favorites: [] });
  };

  return {
    store: {
      characters: [],
      planets: [],
      starships: [],
      favorites: [],
      starshipImages: [
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2e0f812-760e-426d-8792-fe53817ccbd3/dc7r0st-a74472ce-8092-401a-ba8c-9635e78cceba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyZTBmODEyLTc2MGUtNDI2ZC04NzkyLWZlNTM4MTdjY2JkM1wvZGM3cjBzdC1hNzQ0NzJjZS04MDkyLTQwMWEtYmE4Yy05NjM1ZTc4Y2NlYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gWGLJ7914bUMqMtxru5pQr8oCWUhYhS3vdLrR1eCXP8",
				"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C50%2C1600%2C800",
				"https://static.wikia.nocookie.net/starwars/images/5/5b/Imperial_Sentinel-class_shuttle.png",
				"https://cdn.wallpapersafari.com/70/91/clwqXy.png",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtft0FVNe2cS0tumsPLeew190kje113lXPb30CFiZffqT2RNf4&usqp=CAc",
				"https://lumiere-a.akamaihd.net/v1/images/resistance-ywing-main_10b5e63d.jpeg?region=340%2C0%2C720%2C720",
				"https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769",
				"https://cdnb.artstation.com/p/assets/images/images/028/086/799/large/donny-versiga-sw-tie-advanced-01.jpg?1593449609",
				"https://swrpggm.com/wp-content/uploads/2020/12/SSDFE.png",
				"https://external-preview.redd.it/A2lpCEKxYSNqsgaHHjz9TPYVWnAhrA1s64Ey6hCDmv8.jpg?auto=webp&s=1d0a97617b39c6adcbdf34d55c76fe600e1d6d12"
			],
    },
    actions: {
      getCharacters: () => {
        fetch(`${API_URL}/people/`)
          .then(handleResponse)
          .then((data) => {
            console.log("Fetched Characters from API: ", data);
            setStore({ characters: data.results });
          })
          .catch(err => console.error(err));
      },
      getPlanets: () => {
        fetch(`${API_URL}/planets/`)
          .then(handleResponse)
          .then((data) => {
            console.log("Fetched Planets from API ", data);
            setStore({ planets: data.results });
          })
          .catch(err => console.error(err));
      },
      getStarships: () => {
        fetch(`${API_URL}/starships/`)
          .then(handleResponse)
          .then((data) => {
            console.log("Fetched Starships from API: ", data);
            setStore({ starships: data.results });
          })
          .catch(err => console.error(err));
      },
      addFavorite: (favItem) => {
        const store = getStore();
        setStore({
          favorites: [...store.favorites, favItem]
        });
        console.log("favorites from the flux actions.addFavorite: ", store.favorites);
      },
      deleteFavorite: (index) => {
        const store = getStore();
        const newFavorites = store.favorites.filter((_, i) => i !== index);
        setStore({
          favorites: newFavorites
        });
      },
      getFavorites: refreshFavorites
    }
  };
};

export default getState;