import React from "react";
import "../styles/home.css";

import { People } from "./component/people";
import { Vehicles } from "./component/vehicles";
import { Planets } from "./component/planets";

export const Home = () => {
	return(
		<div>
			<People />
			<Planets />
			<Vehicles />
		</div>
		)
};