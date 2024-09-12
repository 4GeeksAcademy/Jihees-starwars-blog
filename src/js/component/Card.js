import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import emptyImg from "../../img/empty.jpg";
import bespinImg from "../../img/bespin.jpg";
import tatooineImg from "../../img/tatooine.jpg";

// useState(false) for imgErr and setImgErr
// create handleImgErr function that sets setImgErr(true)

// in the img tag, create an onError to call handleImgErr
// in the img tag, change src to the function getImgUrl()

export function Card({ item, index, category }) {
    const { store, actions } = useContext(Context);
    const imgUrl = "https://starwars-visualguide.com/assets/img";
    const [imgErr, setImgErr] = useState(false);

    const handleImgErr = () => { setImgErr(true) }


    const isFavorite = store.favorites.some(favItem => favItem.name === item.name && favItem.category === category);

    const handleFavorites = () => {
        const isFavorite = store.favorites.some(favItem => favItem.name === item.name && favItem.category === category);
        if (isFavorite) {
            const indexToDelete = store.favorites.findIndex(favItem => favItem.name === item.name && favItem.category === category);
            if (indexToDelete !== -1) {
                actions.deleteFavorite(indexToDelete);
            }
        } else {
            actions.addFavorite({ name: item.name, index, category });
        }
    };

    const getImgUrl = () => {
        if (item.name === "Tatooine") {
            return tatooineImg
        } else if (item.name === "Bespin") {
            return bespinImg
        } else if (category === "starships") {
            return store.starshipImages[index] || emptyImg;
        } return imgUrl + "/" + category + "/" + (index + 1) + ".jpg";

    }

    const imgStyle = {
        height: category === "starships" ? "180px" :
            category === "planets" ? "280px" :
                "auto",
    };

    return (
        <div className="card bg-secondary m-3" style={{ minWidth: '18rem' }}>
            <img className="card-img-top rounded" onError={handleImgErr} src={getImgUrl()} alt={item.name} style={imgStyle} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {category === 'characters' ? "Gender: " + item.gender :
                        category === 'planets' ? "Population: " + item.population :
                            "Manufacturer: " + item.manufacturer}
                </p>
                <p className="card-text">
                    {category === 'characters' ? "Hair Color: " + item.hair_color :
                        category === 'planets' ? "Terrain: " + item.terrain :
                            "Model: " + item.model}
                </p>
                {category === 'characters' && <p className="card-text">Eye Color: {item.eye_color}
                </p>}

                <div className="buttonGroup mt-auto d-flex justify-content-between">
                    <Link to={`/details/${category}/${index}`}>
                        <button className="btn btn-outline-light">Learn More!</button>
                    </Link>

                    <button onClick={handleFavorites} className="Favorite btn btn-danger">
                        <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
