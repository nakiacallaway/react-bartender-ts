import React from 'react';
import {Link} from 'react-router-dom';

interface CardProps {
  drinks: Drinks;
}

const DrinkCard: React.FC<CardProps> = ({drinks}) => {
  return (
    <div className='card h-100 product-card-hover d-flex flex-column justify-content-between'>
      <div className="dc-card-img">
      
        <div className="dc-bg-img" style={{backgroundImage: `url(${drinks.strDrinkThumb})`}}></div>
          
      </div>
      <span className='card'><h2> <strong> <Link to={`/SingleDrink/${drinks.idDrink}`}> {drinks.strDrink} </Link> </strong>  </h2> </span>
      <span><p className='mt-1'>Main ingredients:</p> <p>{drinks.strIngredient1}</p> <p>{drinks.strIngredient2}</p> <p> {drinks.strIngredient3} <span className="text-white">.</span> </p></span>


    </div>
  


  );
};

export default DrinkCard;