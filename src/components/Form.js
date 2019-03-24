import React from 'react';
import PropTypes from 'prop-types';
import Email from './Form/Email';
import Preference from './Form/Preference';
import SubPreferenceToggle from './Form/SubPreferenceToggle';
import SubPreference from './Form/SubPreference';

class Form extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form className="form">
        <Email updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        <Preference updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        <SubPreferenceToggle updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        {this.props.formContent.subPreferenceCheck
          && <SubPreference updateFormContent={this.props.updateFormContent} formContent={this.props.formContent} />
        }
        <button className="button button--disabled" onClick={this.handleForm} type="submit">Submit</button>
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
