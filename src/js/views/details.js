import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import emptyImg from "../../img/empty.jpg";
import bespinImg from "../../img/bespin.jpg";
import tatooineImg from "../../img/tatooine.jpg";

export const Details = ({ category }) => {

    const { store } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        setImgErr(false);
    }, [location])

    const character = store.characters.find((_, index) => index == params.theid);
    const planet = store.planets.find((_, index) => index == params.theid);
    const starship = store.starships.find((_, index) => index == params.theid);

    const GUIDE_URL = "https://starwars-visualguide.com/assets/img";

    const getImgUrl = () => {
        if (planet.name === "Tatooine") {
            return tatooineImg;
        } else if (planet.name === "Bespin") {
            return bespinImg;
        } else if (category === "starships") {
            return store.starshipImages[parseInt(params.theid)] || emptyImg;
        } return GUIDE_URL + "/" + category + "/" + (parseInt(params.theid) + 1) + ".jpg";
    }

    const handleImgErr = () => {
        setImgErr(true);
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-content-center">
            <div className="details-card card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={getImgUrl()} onError={handleImgErr} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {
                                    category == "characters" ? character.name :
                                        category == "planets" ? planet.name :
                                            starship.name
                                }
                            </h5>
                            <p>
                                {
                                    category == "characters" ? "Birth Year: " + character.birth_year :
                                        category == "planets" ? "Population: " + planet.population :
                                            "Model: " + starship.model
                                }
                            </p>
                            <p>
                                {
                                    category == "characters" ? "Gender: " + character.gender :
                                        category == "planets" ? "Climate: " + planet.climate :
                                            "Manufacturer: " + starship.manufacturer
                                }
                            </p>
                            <p>
                                {
                                    category == "characters" ? "Height: " + character.height :
                                        category == "planets" ? "Terrain: " + planet.terrain :
                                            "Length: " + starship.length
                                }
                            </p>
                            <p>
                                {
                                    category == "characters" ? "Eye Color: " + character.eye_color :
                                        category == "planets" ? "Oribital Period: " + planet.orbital_period :
                                            "Crew: " + starship.crew
                                }
                            </p>
                            <p>
                                {
                                    category == "characters" ? "Character's hair color: " + character.hair_color :
                                        category == "planets" ? "Planet's surface water: " + planet.surface_water :
                                            "Starships' passengers: " + starship.passengers
                                }
                            </p>
                            <p>
                                {
                                    category == "characters" ? "Weight: " + character.mass :
                                        category == "planets" ? "Gravity: " + planet.gravity :
                                            "Max Speed: " + starship.max_atmosphering_speed
                                }
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {
    category: PropTypes.string.isRequired
}