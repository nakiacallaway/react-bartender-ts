import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';

const initialState = {
    drinks: [],
    drink: {},
    is_loading: false,
    getDrinks: () => {},
    getSingleDrink: () => {},
};

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_DRINKS': 
      return {...state, drinks: action.payload, is_loading: false};
    case 'GET_SINGLE_DRINK': 
      return {...state, drink: action.payload, is_loading: false};
    default: 
      return state;
    }
};
    
export const GlobalContext = createContext<InitialStateType>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const getDrinks = async () => {
    console.log('Here we go')
      try {
        let { data } = await instance.get('/api/json/v1/1/search.php?s=');
        console.log('hi mom', data)
        dispatch({ type: 'GET_DRINKS', payload: data.drinks, is_loading: true });
      } catch (e) {
        console.log(e);
      }
    };
  
  const getSingleDrink = async (drinkId: number) => {
    console.log('hello');
    dispatch({ type: 'SET_LOADING', payload: true });
      try {
        let { data } = await instance.get(`/api/json/v1/1/lookup.php?i=${drinkId}`);
        console.log(data.drinks[0]);
    dispatch({ type: 'GET_SINGLE_DRINK', payload: data.drinks[0] });
    } catch (e) {
      console.log(e);
    }};

    return (
        <GlobalContext.Provider
        value={{
            drinks: state.drinks,
            drink: state.drink,
            is_loading: state.is_loading,
            getDrinks,
            getSingleDrink,
        }}>
          {children}
        </GlobalContext.Provider>
    );
};