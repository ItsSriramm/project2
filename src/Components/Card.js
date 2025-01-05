import React from "react";
import './Card.css';

function Card({ title, imageurl, population, region, capital }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <a
          href={`/details.html?title=${encodeURIComponent(title)}&population=${encodeURIComponent(population)}&region=${encodeURIComponent(region)}&capital=${encodeURIComponent(capital)}&imageurl=${encodeURIComponent(imageurl)}`}
        >
          <img src={imageurl} alt={title} />
        </a>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

export default Card;
