import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';

interface CardProps {
  drinks: Drinks;
}

const DrinkCard: React.FC<CardProps> = ({drinks}) => {
  return (
    <div className='card h-100 product-card-hover d-flex flex-column justify-content-between'>
      <div className="dc-card-img">
        <div className="dc-bg-img" style={{backgroundImage: `url(${drinks.strDrinkThumb})`}}></div>
      </div>
      <span>{drinks.strDrink}</span>



    </div>
  


  );
};

export default DrinkCard;