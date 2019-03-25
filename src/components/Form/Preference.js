import React from 'react';
import PropTypes from 'prop-types';
import { validateEmail } from '../../helpers';

class Preference extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateFormContent(name, value);
  }

  render() {
    const isEmailValid = validateEmail(this.props.formContent.email);
    return (
      <label htmlFor="preference">
        <h4 className="form__title">Preference:</h4>
        <div className="form__dropdown">
          <select
            value={this.props.formContent.preference}
            disabled={!isEmailValid}
            id="preference"
            onChange={this.handleChange}
            name="preference"
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
  }),
};


export default Preference;
