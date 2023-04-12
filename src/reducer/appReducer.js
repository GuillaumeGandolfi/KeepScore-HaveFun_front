import { CHANGE_EMAIL_FIELD, CHANGE_PASSWORD_FIELD } from "../store/actions/actions";


const initialState = {
    isLogged : false,
    emailField:'',
    passwordField: ''

}

const reducer = (state = initialState, action={})=>{

    switch(action.type){
        case CHANGE_EMAIL_FIELD:
            return  {...state, emailField: action.input }
            case CHANGE_PASSWORD_FIELD:
            return  {...state, passwordField: action.input }
        default:
            return state
    }
}

export default reducer;