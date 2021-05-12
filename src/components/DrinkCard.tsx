import React from 'react';

interface CardProps {
  drinks: Drinks;
}

const DrinkCard: React.FC<CardProps> = ({drinks}) => {
  return (
    <div className='card h-100 product-card-hover d-flex flex-column justify-content-between'>
      <div className="dc-card-img">
        <div className="dc-bg-img" style={{backgroundImage: `url(${drinks.strDrinkThumb})`}}></div>
      </div>
      <span className='card'><strong>{drinks.strDrink}</strong></span>
      <span><p className='mt-1'>Main ingredients:</p>{drinks.strIngredient1}, {drinks.strIngredient2}, and {drinks.strIngredient3}</span>




    </div>
  


  );
};

export default DrinkCard;