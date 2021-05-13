import { useEffect, useContext } from 'react';
import DrinkCard from '../components/DrinkCard';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';

const HomePage = () => {
  const {drinks, getDrinks} = useContext(GlobalContext);

  useEffect(() => {
    getDrinks();
  }, []);
  
  return (
<div id='home'>
      <div className='row text-center'>
        <div className='col text-white my-3'>
          <h2>Sometimes you wanna go where everybody knows your name.</h2>
        </div>
      </div>
      <div className='row d-flex home-five text-center justify-content-around'>
        {drinks.map((drinks, i) => {
          return (
            <div className='five-columns mb-5' key={i}>
              <DrinkCard drinks={drinks} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;