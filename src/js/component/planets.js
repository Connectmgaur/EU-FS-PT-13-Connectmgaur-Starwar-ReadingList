import React, { useContext } from "react";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    return(
        <div>
            {store.planets.map((e) => {
            <div class="card" style="width: 18rem;">                       
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{e.name}</h5>
                        <p class="card-text">{e.population}</p>
                        <p className="card-text">{e.climate}</p>
                        <p className="card-text">{e.terrain}</p>               
                        <a href="#" class="btn btn-primary">Learn more!</a>
                    </div>
            </div>
            })}  
        </div>
    )
};
