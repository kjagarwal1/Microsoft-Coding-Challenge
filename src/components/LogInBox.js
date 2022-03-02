import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import{ AuthContext } from '../hooks/context';

import {BoxContainer, HeaderText, SubHeaderText, SubText, BoldSubText, SubmitButton} from "../hooks/Styles"

export default function LogInBox() {
  const [state, dispatch] = React.useContext(AuthContext);

  const logOut = async () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
      <BoxContainer>
        <HeaderText>Welcome,</HeaderText>
        <SubHeaderText>{(state.name)}!</SubHeaderText>
        <SubText>You have been registered for this awesome service. Please check your email listed below for instructions.</SubText>
        <BoldSubText>{(state.email)}</BoldSubText>
        <SubmitButton onClick={logOut}>Sign In</SubmitButton>
      </BoxContainer>
  );
}