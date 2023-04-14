import { useDispatch, useSelector } from "react-redux";

import { TextField, Button } from "@mui/material";
import {
  changeEmailField,
  changePasswordField,
} from "../../store/actions/actions";
import Logo__3 from '../../assets/Logo__3.png'

import './connectionForm.css'
import Footer from "../Footer/Footer.jsx";

const ConnectionForm = () => {
  const { emailField, passwordField } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    switch (event.target.id) {
      case "emailField":
        return dispatch(changeEmailField(event.target.value));
      case "passwordField":
        return dispatch(changePasswordField(event.target.value));
      default:
    }
  };
  
  return (
      <>
    <div className="formContainer">
    <img src={Logo__3} alt="a purse smiling full of dollar bills" />
      <p>Keep Score & Have Fun</p>
    <form className="connectionForm">

      <TextField
        onChange={handleChange}
        value={emailField}
        id="emailField"
        label="email"
        variant="outlined"
      />

      <TextField
        onChange={handleChange}
        value={passwordField}
        type="password"
        id="passwordField"
        label="password"
        variant="outlined"
      />

      <Button variant="contained">Connexion</Button>
    </form>

    </div>
  <Footer />
  </>
  );
};

export default ConnectionForm;
