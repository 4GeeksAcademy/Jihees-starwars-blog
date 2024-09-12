import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";

import { Context } from "../store/appContext";



export const Home = () => {

	const { store } = useContext(Context);

	return (
		<div className="homepage">
			<div className="d-flex flex-column p-5 w-100">
				<h1>Characters</h1>
				<div id="cardDiv" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.characters.map((item, index) => {
						return (
							<Card
								item={item} index={index} key={index} category="characters"
							/>

						)
					})}

				</div>
			</div>
			<div className="d-flex flex-column w-100 p-5">
				<h1>Planet</h1>
				<div id="cardDiv1" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.planets.map((item, index) => {
						return (
							<Card
								item={item} index={index} key={index} category="planets"
							/>
						)
					})}
				</div>
			</div>
			<div className="d-flex flex-column w-100 p-5">
				<h1>Starships</h1>
				<div id="cardDiv2" className="d-flex flex-nowrap overflow-scroll align-items-stretch">
					{store.starships.map((item, index) => {
						return (
							<Card
								item={item} index={index} key={index} category="starships"
							/>
						)
					})}
				</div>
			</div>
		</div>
	)

};
