/**
 * Created by ahsan.zaman on 11/10/2017.
 */
import React from 'react';
import App from '../../containers/App/index';
import {Link} from 'react-router';
import commonStyles from './common.css';
import SocialAccounts from '../social-accounts';
import Form from '../form/index';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      user_type: '',
      language: ''
    }
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

  }

  signUpWithEmail = () => {
    this.props.actions.signUpWithEmail(true)

  }

  render() {

    const {signUpWithEmail} = this.props.register;
    const data = {
      name: 'signup-form',
      inputs: [
        {
          tag: 'input',
          label: 'First name',
          attributes: {
            type: 'text',
            name: 'first_name',
            placeholder: 'John',
            required: true
          },
          handler: this.onChangeHandler
        }, {
          tag: 'input',
          label: 'Last name',
          attributes: {
            type: 'text',
            name: 'last_name',
            placeholder: 'Doe',
            required: true
          },
          handler: this.onChangeHandler
        }, {
          tag: 'input',
          label: 'Email address',
          attributes: {
            type: 'email',
            name: 'email',
            placeholder: 'john.d@domain.com',
            required: true
          },
          handler: this.onChangeHandler
        }, {
          tag: 'input',
          label: 'Password',
          attributes: {
            type: 'password',
            name: 'password',
            placeholder: '********',
            required: true
          },
          handler: this.onChangeHandler
        }, {
          tag: 'select',
          label: 'User type',
          attributes: {
            name: 'user_type',
            required: true,
            value: ''
          },
          handler: this.onChangeHandler,
          options: [
            {
              text: 'Select user type',
              value: ''
            }, {
              text: 'Private Tenant',
              value: 'tenant'
            }, {
              text: 'Apartment Owner/Manager',
              value: 'landlord'
            }
          ]
        }, {
          tag: 'select',
          label: 'Language',
          attributes: {
            name: 'language',
            required: true,
            value: 'en'
          },
          handler: this.onChangeHandler,
          options: [
            {
              text: 'English',
              value: 'en'
            }, {
              text: 'Deutsch',
              value: 'de'
            }
          ]
        }
      ],
      submit: {
        handler: this.submitHandler,
        text: 'Register'
      }
    }

    return (
      <div>

        <div class={commonStyles.pageHeader}>
          <h3>
            Register
            <span class="switch pull-right">
              Already have an account?
              <Link to="/">login</Link>
            </span>
          </h3>
          <div class="main-login">
            <SocialAccounts styles={commonStyles} category="Signup"/>
          </div>
        </div>

        <div class={commonStyles.separator}>
          <div>or</div>
        </div>

        {!signUpWithEmail && <p class={commonStyles.signUp}>
          Signup with
          <span class="show-form" onClick={this.signUpWithEmail}>
            E-mail</span>
        </p>}

        {signUpWithEmail && <div><Form formData={data} styles={commonStyles}/>
          <p class="signup-info text-right pull-right">By clicking Register, you agree to our
            <a target="_blank" href="https://www.thehomelike.com/en/imprint-privacy-policy/">Privacy Policy</a>
            and
            <a target="_blank" href="https://www.thehomelike.com/en/terms-and-conditions/">Terms of Use</a>
            .</p>
        </div>}
      </div>

    )
  }

  componentWillMount() {
    this.props.actions.signUpWithEmail(false)
  }
}

export default App(Register, 'register')
