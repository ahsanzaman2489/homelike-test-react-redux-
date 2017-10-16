import {handleActions} from 'redux-actions'

const initialState = {
  isLogin: false
}

export default handleActions({
  'LOGIN' (state, action) {
    console.log(action)
    state = {
      ...state,
      isLogin: action.payload
    }
    return state;
  }
}, initialState)
