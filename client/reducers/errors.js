import {handleActions} from 'redux-actions'

const initialState = {
  error: ''
}

export default handleActions({
  'SET_ERROR' (state, action) {
    state = {
      error: action.payload
    }
    return state;
  }
}, initialState)
