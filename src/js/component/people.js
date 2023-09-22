import React, { useContext } from "react";

export const People = () => {
    const { store, actions } = useContext(Context);
    return(
        <div>
            {store.people.map((e) => {
            <div class="card" style="width: 18rem;">                       
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{e.name}</h5>
                        <p class="card-text">{e.gender}</p>
                        <p className="card-text">{e.hair_color}</p>
                        <p className="card-text">{e.eye_color}</p>               
                        <a href="#" class="btn btn-primary">Learn more!</a>
                    </div>
            </div>
            })}  
        </div>
    )
};
