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
          <h2>Home Page!</h2>
        </div>
      </div>
      <div className='row'>
        {drinks.map((drink:any, i:any) => {
          return (
            <div className='col-sm-12 col-md-3 mb-3' key={i}>
              <DrinkCard drink={drink} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;