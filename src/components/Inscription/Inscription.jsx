import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Style from './inscription.css'

import { getInputValue } from '../../store/actions/signUpAction';


function Inscription() {
  const {firstname, lastname, signUpEmailField, signUpPasswordField} = useSelector(state => state)
  const dispatch = useDispatch()
  // const [nom, setNom] = useState('');
  // const [prenom, setPrenom] = useState('');
  // const [email, setEmail] = useState('');
  // const [motdepasse, setMotdepasse] = useState('');

const handleChange = (event) => {
  dispatch(getInputValue(event.target.id, event.target.value))
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Mot de passe:', motdepasse);
  };

  return (

    <>
    <Header />
    <form className="inputForm"onSubmit={handleSubmit}>
      
      <TextField onChange={handleChange} value={lastname} id="lastname" label="Nom" variant="outlined" />
      <TextField onChange={handleChange}value={firstname} id="firstname" label="Prenom" variant="outlined" />
      <TextField onChange={handleChange} value ={signUpEmailField} id="signUpEmailField" label="Email" variant="outlined" />
      <TextField onChange={handleChange} value={signUpPasswordField} id="signUpPasswordField" label="Mot de passe" variant="outlined" />
      

    
      <Button variant="contained" color="success"> Valider </Button>
       
    </form>

    <Footer />
    </>
  );
}

export default Inscription;