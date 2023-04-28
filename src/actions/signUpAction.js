export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';
// export const SUBMIT_SIGNUP   = 'SUBMIT_SIGNUP'
export const SEND_SIGNUP = 'SIGNUP';

export const getInputValue = (name, value) => ({
    type:GET_INPUT_VALUE,
    value,
    name,
});

// export const submitSignup = () => ({
//     type: SUBMIT_SIGNUP
// })

export const sendSignup = (firstname, lastname, email, password, confirmation) =>({
    type:SEND_SIGNUP,
    firstname,
    lastname,
    email,
    password,
    confirmation,
})
