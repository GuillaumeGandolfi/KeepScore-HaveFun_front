export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';

export const getInputValue = (name, value) => ({
    type:GET_INPUT_VALUE,
    value,
    name,
})