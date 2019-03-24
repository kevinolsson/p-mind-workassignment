import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.Component {
  handleChange = (event) => {
    const formContent = {
      email: event.target.value,
      preference: this.props.formContent.preference,
      subPreferenceCheck: this.props.formContent.subPreferenceCheck,
      subPreference: this.props.formContent.subPreference,
    };
    this.props.updateFormContent(formContent);
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
    preference: PropTypes.string,
    subPreferenceCheck: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};

export default Email;
