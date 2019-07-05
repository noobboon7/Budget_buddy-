export const userLoginFetch = user => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        // debugger
        if (data.error) {
          alert(data.error && data.message)
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

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
      if (!response.error) {
        dispatch({type: "SAVE_USER_TO_STATE", payload: response})
        // dispatch(register(response))
        // why doesn't the second dispatch work???
        // localStorage.setItem("token", response.jwt)
      }
    })
  }
}
// const register = userObj => ({
//     type: 'SET_USER_TO_STATE',
//     payload: userObj
// })
