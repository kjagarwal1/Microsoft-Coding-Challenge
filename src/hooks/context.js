import React from 'react';

export const AuthContext = React.createContext();

export const initialState = {
  name: "",
  email: "",
  pass: "",
  isLoggedIn: false,
};

export const reducer = (state, action) => {
  switch( action.type ) {
    case 'LOGIN':{
      return {
        ...state,
        isLoggedIn: true,
        name: action.name,
        email: action.email,
        pass: action.pass
      }
    }

    case 'LOGOUT':{
      return {
        ...state,
        isLoggedIn: false,
      }
    }

    default:{
      return state;
    }
  }
};