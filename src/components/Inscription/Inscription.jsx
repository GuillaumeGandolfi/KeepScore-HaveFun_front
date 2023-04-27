import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import  './inscription.css'

import { getInputValue, sendSignup } from '../../store/actions/signUpAction';
import { useState } from 'react';


function Inscription() {
  const {firstname, lastname, signUpEmailField, signUpPasswordField, confirmPassword} = useSelector(state => state.signup)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(getInputValue(event.target.id, event.target.value))
}

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendSignup(firstname,lastname,signUpEmailField,signUpPasswordField, confirmPassword))
  };

  return (

    <>
    <Header />
    <form className="inputForm"onSubmit={handleSubmit}>
      
      <TextField onChange={handleChange} value={lastname} id="lastname" label="Nom" variant="outlined" />
      <TextField onChange={handleChange} value={firstname} id="firstname" label="Prénom" variant="outlined" />
      <TextField onChange={handleChange} value ={signUpEmailField} id="signUpEmailField" type={'email'} label="Email" variant="outlined" />
      <TextField onChange={handleChange} value={signUpPasswordField} id="signUpPasswordField" type={'password'} label="Mot de passe" variant="outlined" />
      <TextField onChange={handleChange} value={confirmPassword} id="confirmPassword" type={'password'} label="Confirmer le mot de passe" variant="outlined" />
          
      <Button type='submit' variant="contained" color="success" > Valider </Button>
       
    </form>

    <Footer />
    </>
  );
}

export default Inscription;