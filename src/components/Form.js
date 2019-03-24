import React from 'react';
import PropTypes from 'prop-types';
import Email from './Form/Email';
import Preference from './Form/Preference';
import SubPreferenceToggle from './Form/SubPreferenceToggle';
import SubPreference from './Form/SubPreference';
import { validateEmail } from '../helpers';

class Form extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
  }

  render() {
    const isEmailValid = validateEmail(this.props.formContent.email);
    const isPreferenceValid = (this.props.formContent.preference !== '') ? 1 : 0;
    let isSubPreferenceValid = null;
    if (!this.props.formContent.subPreferenceCheck) {
      isSubPreferenceValid = 1;
    } else {
      isSubPreferenceValid = (
        this.props.formContent.subPreferenceCheck
        && isPreferenceValid
        && this.props.formContent.subPreference !== '') ? 1 : 0;
    }

    const buttonDisabled = (isEmailValid && isPreferenceValid && isSubPreferenceValid) ? 0 : 1;
    return (
      <form className="form">
        <Email updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        <Preference updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        <SubPreferenceToggle updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        {this.props.formContent.subPreferenceCheck
          && <SubPreference updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        }
        <button
          disabled={buttonDisabled}
          className={buttonDisabled ? 'button button--disabled' : 'button button--active'}
          onClick={this.handleForm}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  updateFormContent: PropTypes.func,
  formContent: PropTypes.shape({
    email: PropTypes.string,
    preference: PropTypes.string,
    subPreferenceCheck: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};

export default Form;
