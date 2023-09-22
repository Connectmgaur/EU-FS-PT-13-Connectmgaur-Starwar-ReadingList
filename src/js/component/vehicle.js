import React, { useContext } from "react";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    return(
        <div>
            {store.vehicles.map((e) => {
            <div class="card" style="width: 18rem;">                       
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{e.name}</h5>
                        <p class="card-text">{e.model}</p>
                        <p className="card-text">{e.vehicle_class}</p>
                        <p className="card-text">{e.passengers}</p>               
                        <a href="#" class="btn btn-primary">Learn more!</a>
                    </div>
            </div>
            })}  
        </div>
    )
};
