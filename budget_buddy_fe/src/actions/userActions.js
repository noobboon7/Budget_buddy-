export const userActions = {
    login,
    // logout,
    register
}



function register(user) {
  return{
    type: "SET_USER_TO_STATE",
    payload: user
  }
}
function login(user) {
  return{
    type: "LOGIN_USER",
    payload: user
  }
}

export const persistUserToBackend = (userObj) => {
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
        // localStorage.setItem("token", response.jwt)
      }
    })
  }
}
