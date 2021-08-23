import React, { useState } from "react";
import "./Card.css";
// import { categories } from "../../helper/Data";

function Card({options}) {
  const [flip, setFlip] = useState(false);

  const onFlip = () => setFlip((flipped) => !flipped);

  return (
    <div className="card-item" onClick={onFlip}>
      {!flip ? (
        <div className="front-flip">
          <img className="card-image" src={options.img} alt="" />
          <h5 className="card-title">{options.name}</h5>
        </div>
      ) : (
        <div className="back-flip">
          <ul>
            <li>{options.options[0]}</li>
            <li>{options.options[1]}</li>
            <li>{options.options[2]}</li>
          </ul>
        </div>
      )}
      
    </div>
  )
  
}

export default Card;
