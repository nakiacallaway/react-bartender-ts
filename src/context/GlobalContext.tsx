import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';
import DrinkCard from '../components/DrinkCard';

const initialState = {
    drinks: [],
    drink: undefined,
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
      try {
        let { data } = await instance.get('/drinks');
        dispatch({ type: 'GET_PRODUCTS', payload: data, is_loading: true });
      } catch (e) {
        console.log(e);
      }
    };
  
  const getSingleDrink = async (drinkId: number) => {
    dispatch({ type: 'SET_LOADING', payload: true });
      try {
        let { data } = await instance.get(`/drinks/${drinkId}`);
        console.log(data);
    dispatch({ type: 'GET_SINGLE_PRODUCT', payload: data });
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
        </GlobalContext.Provider>
    );
};