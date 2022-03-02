import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { BoxContainer, HeaderText, SubHeaderText, SubText} from "../hooks/Styles"

import SignUpForm from "./SignUpForm";


export default function SignUpBox() {
  return (
    <div className="shadow card w-50">
      <BoxContainer>
        <HeaderText>Let's</HeaderText>
        <SubHeaderText>Sign Up</SubHeaderText>
        <SubText>Use the form below to sign up for this super awesome service. You're only a few steps away!</SubText>
        <SignUpForm/>
      </BoxContainer>
    </div>
  );
}