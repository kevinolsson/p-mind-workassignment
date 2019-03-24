import React from 'react';

const SubPreferenceToggle = () => (
  <label htmlFor="subPreferenceToggle">
    <h4 className="form__title">I have a specific interest</h4>
    <div className="toggle">
      <input id="subPreferenceToggle" type="checkbox" />
      <div className="toggle__slider" />
    </div>
  </label>
);

export default SubPreferenceToggle;
