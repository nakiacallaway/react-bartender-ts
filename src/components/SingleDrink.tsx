import React from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css';

interface SingleDrink{
  drink: Drinks;
}

const SingleDrinkCard : React.FC <SingleDrink> = ({drink}) =>{
    console.log('hi',drink);
    return(
        <div className="card d-flex bg-dark my-4 col w-70 justify-content-between text-center text-white">
            <div className="card-body">
                <img className="w-50" src={drink.strDrinkThumb} alt={drink.strDrink} />  
            </div>   
            <h5>Ingredients:</h5>
            <div>{drink.strIngredient1}
            </div>                     
            <div>{drink.strIngredient2}
            </div>                     
            <div>{drink.strIngredient3}
            </div>                     
            <div>{drink.strIngredient4}
            </div>                     
            <div>{drink.strIngredient5}
            </div>                     
            <div>{drink.strIngredient6}
            </div>                     
            <div>{drink.strIngredient7}
            </div>                     
            <div>{drink.strIngredient8}
            </div>                     
            <div>{drink.strIngredient9}
            </div>                     
            <div>{drink.strIngredient10}
            </div>                     
            <div>{drink.strIngredient11}
            </div>                     
            <div>{drink.strIngredient12}
            </div>                     
            <div>{drink.strIngredient13}
            </div>                     
            <div>{drink.strIngredient14}
            </div>                     
            <div>{drink.strIngredient15}
            </div> 
            <br />


            
        </div>
    )
}

export default SingleDrinkCard; 