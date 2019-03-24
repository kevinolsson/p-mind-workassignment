import React from 'react';
import { validateEmail } from '../../helpers';

class Email extends React.Component {
  handleChange = (event) => {
    // if(validateEmail(event.target.value)) {
    //   console.log('valid emmail');
    // } else {
    //   console.log('invalid email');
    // }
    this.props.updateEmail(event.target.value); 
  }

  render() {
    return (
      <label htmlFor="email">
        <h4 className="form__title">Email Address</h4>
        <input
          className="form__input"
          id="email"
          placeholder="john@doe.com"
          type="email"
          value={this.props.email}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Email;
