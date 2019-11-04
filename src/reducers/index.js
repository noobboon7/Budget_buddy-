import { combineReducers } from 'redux';
import UserReducer from '../reducers/UserReducer';
import BudgetReducer from '../reducers/BudgetReducer';


export default combineReducers({
  UserReducer,
  BudgetReducer
});
