import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'
import login from './login';
import register from './register';
import forget from './forget';
import errors from './errors';

export default combineReducers({routing, login, register, forget, errors})
