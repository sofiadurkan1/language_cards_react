import React,{useState} from 'react';
import "./Card.css";
import {categories} from "../../helper/Data";

function Card() {
    const [flip,setFlip]= useState(true);
    const onFlip =() => setFlip((flipped) => !flipped);

    

    return (
        <div className="card-container" >
            <h2>Languages</h2>
            {categories.map((card) => {
                return(
                    <div className="card"onClick={onFlip}>
                        <img className="card-image" src={card.img} alt="" />
                        <h5 className="card-title" >{card.name}</h5>
                        
                    </div>

                    
                )

            })}
          
            
        </div>
    )
}

export default Card
