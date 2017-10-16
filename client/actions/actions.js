import {createAction} from 'redux-actions'

const doLogin = createAction('LOGIN');
const signUpWithEmail = createAction('SIGN_UP_WITH_EMAIL')
const setErrors = createAction('SET_ERROR');
const reset = createAction('RESET');

const submitLogin = (values) => {
  const {email, password} = values;
  return dispatch => {
    if (email == 'ahsan_zami@hotmail.com' && password == 'abc123') {
      dispatch(doLogin(true));
      dispatch(setErrors(''));
    } else {
      dispatch(setErrors('Email or Password is not correct'));
    }
  }
}

const submitForget = (values) => {
  const {email} = values;
  return dispatch => {
    if (email == 'ahsan_zami@hotmail.com') {
      dispatch(reset(true));
      dispatch(setErrors(''));
    } else {
      dispatch(setErrors('Email not found'));
    }
  }
}

export const login = {
  submitLogin
};

export const register = {
  signUpWithEmail
}

export const forget = {
  submitForget
}

export const errors = {
  setErrors
}
