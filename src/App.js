import React from "react";

import { AuthContext, reducer, initialState } from './hooks/context';

import SignUpBox from "./components/SignUpBox";
import LogInBox from "./components/LogInBox"

import {AppContainer} from "./hooks/Styles"

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <AppContainer>
        { state.isLoggedIn ? <LogInBox/> : <SignUpBox/> }
      </AppContainer>
    </AuthContext.Provider>
  );
}

export default App;
