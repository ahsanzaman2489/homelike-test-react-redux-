import {handleActions} from 'redux-actions'

const initialState = {
  isReset: true
}

export default handleActions({
  'RESET' (state, action) {
    console.log(action)
    state = {
      ...state,
      isLogin: action.payload,
      error: ''
    }
    return state;
  }
}, initialState)
