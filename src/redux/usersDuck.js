import {signGoogle, outLogGoogle} from '../firebase';
//const
const initialState = {
    loggedIn: false,
    fetching: false,
};
const LOGIN = "LOGIN";
const LOGIN_SUCCES = "LOGIN_SUCCES";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOG_OUT = "LOG_OUT";
//reducer
const userReducer = (state = initialState, action) => {
    switch(action.type){

        case LOGIN:
            return {...state, fetching: true}
        case LOGIN_SUCCES:
            return {...state, fetching: false, loggedIn: true, ...action.payload}    
        case LOGIN_ERROR:
            return {...state, fetching: false, error: action.payload}   
        case LOG_OUT:
            return {...state, loggedIn: false}     
        default:
            return state
    };
}
export default userReducer;
//auxiliar
const saveStorage = storage => localStorage.storage = JSON.stringify(storage);
export const logOutGoogle = () => dispatch => {
    outLogGoogle();
    dispatch({
        type: LOG_OUT,
    })
    localStorage.removeItem('storage');
}
//action
export const getStorageAction = () => dispatch => {
    let storage = localStorage.getItem('storage')
    storage = JSON.parse(storage);
    if(storage && storage.user){
        dispatch({
            type: LOGIN_SUCCES,
            payload: storage.user
        })
    }
}
export const signGoogleAction = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN,
    });
    return signGoogle()
        .then(user => {
            dispatch({
                type: LOGIN_SUCCES,
                payload: {
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    phto: user.photoURL
                }
            })
            saveStorage(getState());
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: LOGIN_ERROR,
                payload: err.message
            })
        })
}