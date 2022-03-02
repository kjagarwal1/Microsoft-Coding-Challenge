import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

import{ AuthContext } from '../hooks/context';

import {BoxContainer, HeaderText, SubHeaderText, SubText, BoldSubText, SubmitButton} from "../hooks/Styles"

export default function SignUpForm() {
  const [state, dispatch] = React.useContext(AuthContext);
  const [fields, setFields] = useState({name:"",email:"",pass:""});

  const logIn = async () => {
    if( fields.name === "" || fields.email === "" || fields.pass === "" ){ alert("All fields must contain a value");  }
    else if( !fields.email.includes("@") ){ alert("That is an invalid email id");}
    else{ dispatch({ type: 'LOGIN', name: fields.name, email: fields.email, pass: fields.pass}); }
  }
  
  const updateFields = (e) => {
    setFields({...fields,[e.target.name]:e.target.value})
  }

  return (
    <div className="form" >
      <label className="form-label strong pt-3 fs-5 font-weight-bold">First Name</label>
      <input className="form-control" type="text" name="name" value={fields.name} onChange={updateFields}/>
    

      <label className="form-label pt-3 fs-5 font-weight-bold">Email Address</label>
      <input className="form-control" type="email" name="email" value={fields.email} onChange={updateFields}/>

      <label className="form-label pt-3 fs-5 font-weight-bold">Password</label>
      <input className="form-control" type="password" name="pass" value={fields.pass} onChange={updateFields}/>
      <br/>
      <SubmitButton onClick={logIn}>Sign Up</SubmitButton>
    </div>
  );
}