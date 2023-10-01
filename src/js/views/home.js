import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mx-5">
      <h1>Characters</h1>

      {/* <div className="d-flex justify-content-evenly"> */}

      <div className=" d-flex row my-3">
        {store.people.items.map((person) => {
          return (
            <div key={person.uid} className="Card" style={{ width: "19%", border: "1px solid lightgray", borderRadius: "5px", padding: "5px", margin: "5px" }}>
              <div className="Card-Body d-flex justify-content-center">

                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                  style={{ width: "200px" , Length:"400px"}}
                ></img>
              </div>
              <div className="Card-Text d-flex justify-content-center">
                <h5 className="card-title">{person.name}</h5>
              </div>

              <div>
                <p className="card-text">Gender: {person.gender}</p>
                <p className="card-text">Hair Color: {person.hair_color}</p>
                <p className="card-text">Eye Color: {person.eye_color}</p>

              </div>
              <div className="d-flex justify-content-between mb-3">
                <Link className="btn btn-primary" to={`/person/${person.uid}`} style={{ marginTop: "5px" , marginLeft:"3px", marginRight:"5px"}}>
                  Learn More
                  <FontAwesomeIcon icon={faCircleInfo} />

                </Link>
                <a
                  className="btn btn-warning"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    actions.toggleFavorite("person", person.uid, person);
                  }}
                >
                  {store.favorites.some(
                    (fav) => fav.uid == person.uid && fav.type == "person"
                  ) ? (
                    <FontAwesomeIcon icon={faHeartSolid}  style={{ color: 'green' }}/>
                  ) : (
                    <FontAwesomeIcon icon={faHeartOutline}  />
                  )}

                </a>
              </div>
            </div>
          );

        })}
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.loadNextPeople();
            }}
            type="button"
            className="btn btn-secondary"
          >
            Load more...
          </button>
        </div>
      </div>

      <h1>Vehicles</h1>
      <div className="d-flex row my-3">
        {store.vehicles.items.map((vehicle) => {
          return (

            <div key={vehicle.uid} className="Card" style={{ width: "19%", border: "1px solid lightgray", borderRadius: "5px", padding: "5px", margin: "5px" }}>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  style={{ width: "250px", Length:"400px" }}
                ></img>
              </div>
              <div className="d-flex justify-content-center my-3">
                <h4>{vehicle.name}</h4>
              </div>
             
              <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
              <p className="card-text">Model: {vehicle.model}</p>
              <p className="card-text">Passengers: {vehicle.passengers}</p>
              <div className="d-flex justify-content-evenly">
                <p>
                  <Link
                    className="btn btn-primary" 
                    to={`/vehicle/${vehicle.uid}`} > Learn More
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </Link>
                </p>
                <p>
                  <a
                    href="#"
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      actions.toggleFavorite("vehicle", vehicle.uid, vehicle);
                    }}
                  >
                    {store.favorites.some(
                      (fav) => fav.uid == vehicle.uid && fav.type == "vehicle"
                    ) ? (
                      <FontAwesomeIcon icon={faHeartSolid} />
                    ) : (
                      <FontAwesomeIcon icon={faHeartOutline} />
                    )}
                  </a>
                </p>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.loadNextVehicles();
            }}
            type="button"
            className="btn btn-secondary"
          >
            Load more...
          </button>
        </div>
      </div>

      <h1>Planets</h1>
      <div className="d-flex row my-3">
        {store.planets.items.map((planet) => {
          return (

            <div key={planet.uid} className="Card" style={{ width: "19%", border: "1px solid lightgray", borderRadius: "5px", padding: "5px", margin: "5px" }}>

              <div className="d-flex justify-content-center">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  style={{ width: "250px", Length:"400px" }}
                ></img>
              </div>
              
              <div className="d-flex justify-content-center my-3">
                <h4>{planet.name}</h4>
              </div>
                <div>
                <p className="card-text">Description: {planet.description}</p>
                <p className="card-text">Population: {planet.population}</p>
                <p className="card-text">Terrain: {planet.terrain}</p>
                </div>
              <div className="d-flex justify-content-evenly">
                <p>
                  <Link
                    className="btn btn-primary"
                    to={`/planet/${planet.uid}`}
                  >
                     Learn More
                    <FontAwesomeIcon icon={faCircleInfo} />
                   
                  </Link>
                </p>
                <p>
                  <a
                    href="#"
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      actions.toggleFavorite("planet", planet.uid, planet);
                    }}
                  >
                    {store.favorites.some(
                      (fav) => fav.uid == planet.uid && fav.type == "planet"
                    ) ? (
                      <FontAwesomeIcon icon={faHeartSolid} />
                    ) : (
                      <FontAwesomeIcon icon={faHeartOutline} />
                    )}
                  </a>
                </p>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.loadNextPlanets();
            }}
            type="button"
            className="btn btn-secondary"
          >
            Load more...
          </button>
        </div>
      </div>
    </div>
  );
};
