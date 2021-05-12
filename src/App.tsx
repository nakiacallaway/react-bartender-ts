import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routers/AppRoutes';
import './App.css';
import { GlobalProvider } from './context/GlobalContext';

const App = () => {
  return (
    
    <Router>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </Router>
    
  );
}

export default App;
