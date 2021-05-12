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
        <div className='col'>
          <h2>Sometimes you wanna go where everybody knows your name.</h2>
          <h3>{drinks.length} drinks to choose from!</h3>
        </div>
      </div>
      <div className='row'>
        {drinks.map((drinks, i) => {
          return (
            <div className='col-sm-12 col-md-3 mb-3' key={i}>
              <DrinkCard drinks={drinks} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;