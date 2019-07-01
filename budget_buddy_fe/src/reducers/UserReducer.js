let initialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  bio: "",
  amount: 0,
  avatar:""
}

const userReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {

    case "SAVE_USER_TO_STATE":
    let userObj = action.payload
      return {
        ...state,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        username: userObj.username,
        password: userObj.password,
        email: userObj.email,
        bio: userObj.bio,
        amount: userObj.amount,
        avatar: userObj.avatar
      }

    default:
      return state;
  }
}

export default userReducer
