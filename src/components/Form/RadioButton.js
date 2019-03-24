import React from 'react';
import PropTypes from 'prop-types';

class RadioButton extends React.Component {
  handleChange = (event) => {
    const formContent = {
      email: this.props.formContent.email,
      preference: this.props.formContent.preference,
      subPreferenceCheck: this.props.formContent.subPreferenceCheck,
      subPreference: event.target.value,
    };
    this.props.updateFormContent(formContent);
  }

  render() {
    return (
      <label htmlFor={this.props.subject}>
        <input
          onChange={this.handleChange}
          checked={this.props.subPreference === this.props.subject ? 1 : 0}
          id={this.props.subject}
          name="subPreference"
          value={this.props.subject}
          type="radio"
        />
        <div className="radio-button__block" />
        <h4 className="form__title radio-button__title">
          {this.props.subject}
        </h4>
      </label>
    );
  }
}

RadioButton.propTypes = {
  updateFormContent: PropTypes.func,
  subject: PropTypes.string,
  subPreference: PropTypes.string,
  formContent: PropTypes.shape({
    email: PropTypes.string,
    preference: PropTypes.string,
    subPreferenceCheck: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};


export default RadioButton;
