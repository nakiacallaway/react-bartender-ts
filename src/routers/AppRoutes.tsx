import { Switch, Route } from 'react-router-dom';
// page components
import HomePage from '../pages/HomePage';
// Components
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;