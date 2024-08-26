import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";

import { Context } from "../store/appContext";



export const Home = () => {

	const { store } = useContext(Context);

	return (
		<div>
			<div className="d-flex flex-column w-100 align-items-center">
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
		</div>
	)

};
