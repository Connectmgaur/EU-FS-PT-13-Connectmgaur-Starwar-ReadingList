import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span className="navbar-brand mb-0 h1">React SWAPI</span>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
				<Link to="/people">
					<button className="btn btn-primary">People</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-primary">Vehicles</button>
				</Link>
			</div>
		</nav>
	);
};
