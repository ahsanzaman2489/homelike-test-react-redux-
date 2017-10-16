/**
 * Created by ahsan.zaman on 11/10/2017.
 */
import React from 'react';
import App from '../../containers/App';
import {Link} from 'react-router';
import commonStyles from './common.css';
import SocialAccounts from '../social-accounts';
import Form from '../form/index';

const initialState = {
  email: '',
  password: ''
}
class Login extends React.Component {

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
    this.props.actions.submitLogin(this.state);

  }
  render() {

    const data = {
      link: '/forget',
      name: 'login-form',
      inputs: [
        {
          tag: 'input',
          label: 'email address',
          attributes: {
            type: 'email',
            name: 'email',
            placeholder: 'john.d@domain.com',
            required: true,
            value: this.state.email
          },
          handler: this.onChangeHandler
        }, {
          tag: 'input',
          label: 'password',
          attributes: {
            type: 'password',
            name: 'password',
            placeholder: '**********',
            required: true,
            value: this.state.password
          },
          handler: this.onChangeHandler
        }
      ],
      submit: {
        handler: this.submitHandler,
        text: 'Login'
      }
    }
    const {errors} = this.props;
    return (

      <div>
        <div class={commonStyles.pageHeader}>
          <h3>
            Log in
            <span class="switch pull-right">
              Not registered yet?
              <Link to="/register">Register</Link>
            </span>
          </h3>
          <div class="main-login">
            <SocialAccounts styles={commonStyles} category="Log in"/>
          </div>
        </div>
        <div class={commonStyles.separator}>
          <div>or</div>
        </div>
        <Form formData={data} styles={commonStyles}/> {errors.error != '' && <div>{errors.error}</div>}
      </div>
    )
  }

  componentWillMount() {
    this.props.errorsAction.setErrors('')
  }
}
export default App(Login, 'login');
