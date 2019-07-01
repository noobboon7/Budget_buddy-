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
    type: "SET_USER_TO_STATE",
    payload: user
  }
}
