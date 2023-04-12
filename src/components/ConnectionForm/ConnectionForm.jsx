import { useDispatch, useSelector } from "react-redux";

import { TextField, Button } from "@mui/material";
import {
  changeEmailField,
  changePasswordField,
} from "../../store/actions/actions";

const ConnectionForm = () => {
  const { emailField, passwordField } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    console.log(event)
    switch (event.target.id) {
      case "emailField":
        
        return dispatch(changeEmailField(event.target.value));
       
      case "passwordField":
        return dispatch(changePasswordField(event.target.value));
        
      default:
    }
  };
  return (
    <div className="connectionForm">
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
      <Button variant="contained">Connect</Button>
    </div>
  );
};


export default ConnectionForm