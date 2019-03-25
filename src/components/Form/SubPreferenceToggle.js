import React from 'react';
import PropTypes from 'prop-types';

class SubPreferenceToggle extends React.Component {
  handleChange = (event) => {
    const { name, checked } = event.target;
    this.props.updateFormContent(name, checked);
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
            name="subPreferenceCheck"
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
    subPreferenceCheck: PropTypes.bool,
  }),
};

export default SubPreferenceToggle;
