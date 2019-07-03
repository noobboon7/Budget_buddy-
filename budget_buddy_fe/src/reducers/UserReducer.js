let initialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  bio: "",
  amount: 0,
  avatar:"../avatar.png",
  token: "",
  loggedIn: false
}

const userReducer = (state = initialState, action) => {
  // debugger
  // console.log(state)
  switch (action.type) {

    case "SAVE_USER_TO_STATE":
    debugger
    let userObj = action.payload.user
      return {
        ...state,
        firstName: userObj.first_name,
        lastName: userObj.last_name,
        username: userObj.username,
        password: userObj.password,
        email: userObj.email,
        bio: userObj.bio,
        amount: userObj.amount,
        avatar: userObj.avatar,
        loggedIn: true
      }

      case "LOGIN_USER":
      debugger
      return{
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        loggedIn: true
      }

    default:
      return state;
  }
}

export default userReducer
