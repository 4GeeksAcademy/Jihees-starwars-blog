import React, { useContext } from "react";
import { Context } from "../store/appContext";

export function Card({ item, index, category }) {

    const { store, action } = useContext(Context);
    const imgUrl = "https://starwars-visualguide.com/assets/img";
    // const {
    //     imageUrl,
    //     cardTitle,
    //     cardBodyText,
    //     callToActionText,
    //     callToActionUrl
    // } = item;


    return (
        <div className="card"
            style={{
                minWidth: '18rem'
            }}>

            <img className="card-img-top" src={`${imgUrl}/${category}/${index + 1}.jpg`} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.eye_color}</p>
                <p className="card-text">{item.hair_color}</p>
                <p className="card-text">{item.gender}</p>
                <div id="cardButtonGroup">
                    <Link to={"/details/" + category + "/" + index}>
                        <button className="btn btn-outline-primary">Learn More!</button>
                    </Link>
                    <button className="Favorite btn btn-outline-warning"><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}