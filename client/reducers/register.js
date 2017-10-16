import {handleActions} from 'redux-actions'

const initialState = {
  signUpWithEmail: false
}

export default handleActions({
  'SIGN_UP_WITH_EMAIL' (state, action) {
    state = {
      ...state,
      signUpWithEmail: action.payload
    }

    return state
  }
}, initialState)
