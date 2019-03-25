import React from 'react';
import PropTypes from 'prop-types';
import Email from './Form/Email';
import Preference from './Form/Preference';
import Toggle from './Form/Toggle';
import SubPreference from './Form/SubPreference';
import { validateButton } from '../helpers';

class Form extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
    this.props.handleForm();
  };

  render() {
    const buttonDisabled = validateButton(this.props.formContent);
    return (
      <form className="form" onSubmit={this.handleForm}>
        <h1>
          <span className="secondary-color">Signup </span>
          for our Newsletter
        </h1>
        <p>This is a work assignment for Påmind. Please enter your email address and preferences!</p>
        <Email
          updateFormContent={this.props.updateFormContent}
          formContent={this.props.formContent}
        />
        <Preference
          updateFormContent={this.props.updateFormContent}
          formContent={this.props.formContent}
        />
        <Toggle
          updateFormContent={this.props.updateFormContent}
          formContent={this.props.formContent}
        />
        {this.props.formContent.subPreferenceToggle
          && (
            <SubPreference
              updateFormContent={this.props.updateFormContent}
              formContent={this.props.formContent}
            />
          )
        }
        <button
          disabled={buttonDisabled}
          className={buttonDisabled ? 'button button--disabled' : 'button button--active'}
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
  handleForm: PropTypes.func,
  formContent: PropTypes.shape({
    email: PropTypes.string,
    preference: PropTypes.string,
    subPreferenceToggle: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};

export default Form;
