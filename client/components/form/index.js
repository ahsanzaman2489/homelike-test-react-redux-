import React from 'react';
import {Link} from 'react-router';

export default class Form extends React.Component {
  extractInput(item, index) {
    return (
      <div class="form-group" key={index}>
        <label>{item.label} {item.required && '*'}</label>
        {item.tag == 'input' && <item.tag {...item.attributes} class="form-control" onChange={item.handler}/>}
        {item.tag == 'select' && <item.tag {...item.attributes} class="form-control" onChange={item.handler}>
          {item.options.map((item, index) => {
            return (
              <option key={index} value={item.value} disabled={item.value == ''}>{item.text}</option>
            )
          })}
        </item.tag>
}
      </div>
    )
  }
  render() {

    const {formData, styles} = this.props;

    return (
      <div>
        <form name={formData.name} class={styles.form} onSubmit={formData.submit.handler}>
          {formData.inputs.map((item, index) => this.extractInput(item, index))}

          <div>
            {formData.name == 'login-form'
              ? <Link to={formData.link} class='pull-right'>Forgot your password ?</Link>
              : ''}

            {formData.name == 'reset-form'
              ? <Link to={formData.link} class='pull-left'>Back</Link>
              : ''}
            <div class="clearfix"></div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary btn-md pull-right">{formData.submit.text}</button>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    )
  }
}
