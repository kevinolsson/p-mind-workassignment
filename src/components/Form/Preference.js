import React from 'react';
import PropTypes from 'prop-types';
import { validateEmail } from '../../helpers';

class Preference extends React.Component {
  handleChange = (event) => {
    const formContent = {
      email: this.props.formContent.email,
      preference: event.target.value,
      subPreferenceCheck: this.props.formContent.subPreferenceCheck,
      subPreference: '',
    };
    this.props.updateFormContent(formContent);
  }

  render() {
    const isEmailValid = validateEmail(this.props.formContent.email);
    return (
      <label htmlFor="preference">
        <h4 className="form__title">Preference:</h4>
        <div className="form__dropdown">
          <select
            defaultValue={this.props.formContent.preference}
            disabled={!isEmailValid}
            required
            id="preference"
            onChange={this.handleChange}
          >
            <option value="" disabled hidden>Select preference</option>
            <option value="IT">IT</option>
            <option value="Fitness">Fitness</option>
            <option value="Bikes">Bikes</option>
            <option value="3D Printing">3D Printing</option>
          </select>
        </div>
      </label>
    );
  }
}

Preference.propTypes = {
  updateFormContent: PropTypes.func,
  formContent: PropTypes.shape({
    email: PropTypes.string,
    preference: PropTypes.string,
    subPreferenceCheck: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};


export default Preference;
