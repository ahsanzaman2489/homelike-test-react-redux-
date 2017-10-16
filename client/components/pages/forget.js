/**
 * Created by ahsan.zaman on 13/10/2017.
 */

import React from 'react';
import App from '../../containers/App/index';
import {Link} from 'react-router';
import commonStyles from './common.css';
import Form from '../form/index';

const initialState = {
  email: ''
}
class Forget extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState
  }

  onChangeHandler = (e) => {
    var results = {
      ...this.state
    };

    results[e.target.name] = e.target.value;
    this.setState(results)

  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.actions.submitForget(this.state)

  }

  render() {

    const data = {
      link: '/',
      name: 'reset-form',
      inputs: [
        {
          tag: 'input',
          label: 'Please enter the email address associated with your Homelike account',
          attributes: {
            type: 'email',
            name: 'email',
            placeholder: 'john.d@domain.com',
            required: true,
            value: this.state.email
          },
          handler: this.onChangeHandler
        }
      ],
      submit: {
        handler: this.submitHandler,
        text: 'Reset your password'
      }
    }

    const {errors} = this.props;
    return (
      <div>
        <div class={commonStyles.pageHeader}>
          <h3>
            Reset your password
          </h3>
        </div>
        <Form formData={data} styles={commonStyles}/> {errors.error != '' && <div>{errors.error}</div>}
      </div>
    )
  }
}

export default App(Forget, 'forget');
