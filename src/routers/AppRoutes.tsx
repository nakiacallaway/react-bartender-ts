import { Switch, Route } from 'react-router-dom';
// page components
import HomePage from '../pages/HomePage';
// Components
import SingleDrink from '../pages/SingleDrink';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../context/GlobalContext';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/SingleDrink' component={SingleDrink} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;