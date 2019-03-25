import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  handleChange = (event) => {
    const { name, checked } = event.target;
    this.props.updateFormContent(name, checked);
  }

  render() {
    return (
      <label htmlFor="toggle">
        <h4 className="form__title">I have a specific interest</h4>
        <div className="toggle">
          <input
            checked={this.props.formContent.subPreferenceToggle}
            id="toggle"
            onChange={this.handleChange}
            type="checkbox"
            name="subPreferenceToggle"
          />
          <div className="toggle__slider" />
        </div>
      </label>
    );
  }
}

Toggle.propTypes = {
  updateFormContent: PropTypes.func,
  formContent: PropTypes.shape({
    subPreferenceToggle: PropTypes.bool,
  }),
};

export default Toggle;
