import { TextField } from '@mui/material';
import React, { useState } from 'react';

function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motdepasse, setMotdepasse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Mot de passe:', motdepasse);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <TextField onChange={(event) => setNom(event.target.value)} value={nom} id="outlined-basic" label="Nom" variant="outlined" />
      <TextField onChange={(event) => setPrenom(event.target.value)}value={prenom} id="outlined-basic" label="Prenom" variant="outlined" />
      <TextField onChange={(event)=>setEmail(event.target.value )} value ={email} id="outlined-basic" label="Email" variant="outlined" />
      <TextField onChange={(event)=>setMotdepasse(event.target.value)} value={motdepasse} id="outlined-basic" label="Mot de passe" variant="outlined" />
      

      <button type="submit">Valider</button>
      
    </form>
  );
}

export default Inscription;