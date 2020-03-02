import { getItemFetch } from './ItemAction';
export const userLoginFetch = user => {
  // debugger
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
          // alert(data.error)
        } else {
          // debugger
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
          dispatch(getItemFetch())
        }
      })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const getProfileFetch = () => {
  return dispatch => {
    // debugger
    const token = localStorage.token;
    if (token) {
      // debugger
      return fetch(`http://localhost:3000/auto_login`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            // debugger
            alert(data.error)
            localStorage.removeItem("token")
          } else {
            // debugger
            dispatch(loginUser(data));
          }
        })
    }
  }
}

export const addUserToBackend = (userObj) => {
  // debugger
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
      // debugger
      if (!response.error) {
        // dispatch({type: "SAVE_USER_TO_STATE", payload: response})
        localStorage.setItem("token", response.jwt)
        dispatch(register(response))

      }
    })
  }
}
const register = userObj => ({
  type: 'SAVE_USER_TO_STATE',
  payload: userObj
})

export const addToUserWallet = (amount) => {
  // debugger
  return (dispatch) => {
    fetch("http://localhost:3000/add_to_wallet",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        'Authorization': localStorage.token
      },
      body: JSON.stringify(amount)
    })
    .then(res => res.json())
    .then((response) => {
      if (!response.error) {
        dispatch(addToWallet(response.user.amount))
      }
    })
  }
}


const addToWallet = (amount) => ({
  type: 'ADD_BALANCE',
  payload: amount
})
