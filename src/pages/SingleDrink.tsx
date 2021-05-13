import {GlobalContext} from '../context/GlobalContext';
import {useContext,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SingleDrinkCard from '../components/SingleDrink';

const SingleDrink = () =>{
    const {drink,getSingleDrink} = useContext(GlobalContext);
    const {idDrink} = useParams<{idDrink: string}>();
    useEffect(() =>{
        getSingleDrink(+idDrink)
        console.log(idDrink)
    },[])
   

    return (
        <div id='single-drink'>
        <div className='row my-5'>
          <div className='col d-flex justify-content-center'>
            <SingleDrinkCard drink={drink}/>
            
          </div>
        </div>
      </div>
    )
}

export default SingleDrink
