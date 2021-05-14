import { useEffect, useContext, useState, ChangeEvent } from 'react';
import DrinkCard from '../components/DrinkCard';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';

const HomePage = () => {
  const {drinks, getDrinks} = useContext(GlobalContext);
  
  const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(drinks);
  useEffect(() => {

    const searchData = drinks.filter(drink => {
      return (
        drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    searchTerm === ''
      ? setFilteredData(drinks)
      : setFilteredData(searchData);
  }, [searchTerm, drinks]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

  useEffect(() => {
    getDrinks();
  }, []);
  
  return (
<div id='home'>
      <div className='text-center'>
        <div className='col text-white my-3'>
          <h2>Sometimes you wanna go where everybody knows your name.</h2>
        </div>
        <div className='row mt-5'>
          <div className='col'>
            <form action="">
              <div className='input-group'>
                <input 
                type='text'
                className='form-control text-center'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search for Drink'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row d-flex home-five text-center justify-content-around'>
        {filteredData.map((drinks, i) => {
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