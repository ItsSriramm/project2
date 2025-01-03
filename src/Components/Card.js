import React from "react";
import './Card.css';

function Card({title,imageurl,population,region,capital})
{
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageurl} alt="Nothing"/>
            </div>
            <div className="card-container">
          
               <h3>{title}</h3> 
            
            
                <p>Population :{population}</p>
                <p>Region :{region}</p>
                <p>Capital :{capital}</p>
            
            </div>
        </div>
    )

}




export default Card