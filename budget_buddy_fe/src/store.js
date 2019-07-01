import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import  thunk  from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {
  user: {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    bio: "",
    amount: 0,
    avatar:"",
    token:""
  },
  budget: {
    item: "",
    amount: 0,
    description: "",
    catagory:""
  },
  expenses: []
}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)


export default store;
