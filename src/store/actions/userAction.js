export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';

export const saveUserInfo = (id,family,email,firstname,lastname,level,wallet,operations,friends,quests,items) =>({
    type: SAVE_USER_INFO,
    id,
    family,
    email,
    firstname,
    lastname,
    level,
    wallet,
    operations,
    friends,
    quests,
    items,
})

export const deleteUserInfo = () => ({
    type:DELETE_USER_INFO 
})