import React from 'react';
import PropTypes from 'prop-types';

class SubPreferenceToggle extends React.Component {
  handleChange = (event) => {
    let subPrefValue = '';
    if (event.target.checked) {
      subPrefValue = this.props.formContent.subPreference;
    }

    const formContent = {
      email: this.props.formContent.email,
      preference: this.props.formContent.preference,
      subPreferenceCheck: event.target.checked,
      subPreference: subPrefValue,
    };
    this.props.updateFormContent(formContent);
  }

  render() {
    return (
      <label htmlFor="subPreferenceToggle">
        <h4 className="form__title">I have a specific interest</h4>
        <div className="toggle">
          <input
            checked={this.props.formContent.subPreferenceCheck}
            id="subPreferenceToggle"
            onChange={this.handleChange}
            type="checkbox"
          />
          <div className="toggle__slider" />
        </div>
      </label>
    );
  }
}

SubPreferenceToggle.propTypes = {
  updateFormContent: PropTypes.func,
  formContent: PropTypes.shape({
    email: PropTypes.string,
    preference: PropTypes.string,
    subPreferenceCheck: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};

export default SubPreferenceToggle;
