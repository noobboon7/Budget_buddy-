import { combineReducers } from 'redux';
import UserReducer from '../reducers/UserReducer';
import BudgetReducer from '../reducers/BudgetReducer';


export default combineReducers({
  UserReducer,
  BudgetReducer
});
export const persistUserToBackend = (userObj) => {
  return (dispatch) => {
    fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then((response) => {
      if (!response.error) {
        localStorage.setItem("token", response.jwt)
        dispatch({type: "SAVE_USER_TO_STATE", payload: response})
      }
    })
  }
}
