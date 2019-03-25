import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateFormContent(name, value);
  }

  render() {
    return (
      <label htmlFor="email">
        <h4 className="form__title">Email Address *</h4>
        <input
          className="form__input"
          id="email"
          placeholder="john@doe.com"
          type="email"
          name="email"
          value={this.props.formContent.email}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

Email.propTypes = {
  updateFormContent: PropTypes.func,
  formContent: PropTypes.shape({
    email: PropTypes.string,
  }),
};

export default Email;
