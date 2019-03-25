import React from 'react';
import PropTypes from 'prop-types';

class RadioButton extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateFormContent(name, value);
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
};


export default RadioButton;
