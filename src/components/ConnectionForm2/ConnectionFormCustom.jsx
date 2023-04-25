import { useDispatch, useSelector } from "react-redux";

import { TextField, Button } from "@mui/material";
import {
  changeEmailField,
  changePasswordField,
} from "../../store/actions/actions";
import Logo__3 from '../../assets/Logo__3.png'

import './connectionFormcustom.css'
import Footer from "../Footer/Footer.jsx";
import { submitLogin } from "../../store/actions/authAction";
import { Navigate } from "react-router-dom";

const ConnectionFormCustom = () => {
  const { email, password, isLogged } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    switch (event.target.id) {
      case "email":
        return dispatch(changeEmailField(event.target.value));
      case "password":
        return dispatch(changePasswordField(event.target.value));
      default:
    }
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    return dispatch(submitLogin(email,password))
  }
  
  return (
      <>
      {isLogged && <Navigate to={'/homepage'} replace={true} />}
    <div className="formContainer">
    <img className="connectionFormLogo" src={Logo__3} alt="a colorfull game controller" />
      <div className="connectionForm__container-animation">
        <p className="connection-brand">Keep Score & Have Fun</p>
        <div>-</div>
        <h2>Connectez vous</h2>
        <form method="POST" onSubmit={handleSubmit} className="connectionForm">

          <TextField
              className="connectionForm__textfield"
              onChange={handleChange}
              value={email}
              id="email"
              label="email"
              variant="outlined"
          />

          <TextField
              className="connectionForm__textfield"
              onChange={handleChange}
              value={password}
              type="password"
              id="password"
              label="password"
              variant="outlined"
          />

          <Button type="submit" variant="contained">Connexion</Button>
        </form>
      </div>
    </div>
  <Footer />
  </>
  );
};

export default ConnectionFormCustom;