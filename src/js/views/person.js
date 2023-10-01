import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const person = actions.loadPerson(params.uid);
	return (

		<div className="container">
		<div className="row">
		  <div className="col-6 text-justify-content-center">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} style={{ width: "400px", Length: "500px" }} className="col-6"></img>
		  </div>
	  
		  <div className="col-6 text-center">
			<h1 className="col-6">{person.name}</h1>
			<p className="col-3"> </p>
			<div className="col-6">
			  <p className="text">{person.description}</p>
			 
			</div>
		  </div>
		</div>
	  
		<hr className="my-4 bg-danger" />
	  
		<div className="row text-center">
		  <div className="col text-danger">
			<h5>Gender</h5>
			<p>{person.gender}</p>
		  </div>
		  <div className="col text-danger">
			<h5>Height</h5>
			<p>{person.height}</p>
		  </div>
		  <div className="col text-danger">
			<h5>Mass</h5>
			<p>{person.mass}</p>
		  </div>
		  <div className="col text-danger">
			<h5>Hair color</h5>
			<p>{person.hair_color}</p>
		  </div>
		  <div className="col text-danger">
			<h5>Skin color</h5>
			<p>{person.skin_color}</p>
		  </div>
		  <div className="col text-danger">
			<h5>Birth year</h5>
			<p>{person.birth_year}</p>
		  </div>
		</div>
	  
		<div className="d-flex justify-content-center mt-4">
		  <Link to="/">
			<span className="btn btn-primary btn-lg" role="button">
			  Back Home
			</span>
		  </Link>
		</div>
	  </div>


	);
};


