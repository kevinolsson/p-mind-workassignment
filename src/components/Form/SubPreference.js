import React from 'react';

const SubPreference = () => (
  <div className="radio-button">
    <label htmlFor="security">
      <input id="security" name="subPreference" value="security" type="radio" />
      <div className="radio-button__block" />
      <h4 className="form__title radio-button__title">Security</h4>
    </label>
    <label htmlFor="computers">
      <input id="computers" name="subPreference" value="computers" type="radio" />
      <div className="radio-button__block" />
      <h4 className="form__title radio-button__title">Computers</h4>
    </label>
    <label htmlFor="games">
      <input id="games" name="subPreference" value="games" type="radio" />
      <div className="radio-button__block" />
      <h4 className="form__title radio-button__title">Games</h4>
    </label>
  </div>
);

export default SubPreference;
