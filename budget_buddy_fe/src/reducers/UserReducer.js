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
    let userObj = action.payload.user
    // debugger
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
      let currentUser = action.payload
      // debugger
      return{
        ...state,
        id: currentUser.id,
        firstName: currentUser.first_name,
        lastName: currentUser.last_name,
        username: currentUser.username,
        email: currentUser.email,
        bio: currentUser.bio,
        amount: currentUser.amount,
        avatar: currentUser.avatar,
        loggedIn: true
      }

    default:
      return state;
  }
}

export default userReducer
