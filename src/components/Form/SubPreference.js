import React from 'react';

const SubPreference = () => (
  <React.Fragment>
    <label htmlFor="security">
      <input className="form__radio" id="security" name="subPreference" value="security" type="radio" />
      <span className="form__title">Security</span>
    </label>
    <label htmlFor="computers">
      <input className="form__radio" id="computers" name="subPreference" value="computers" type="radio" />
      <span className="form__title">Computers</span>
    </label>
    <label htmlFor="games">
      <input className="form__radio" id="games" name="subPreference" value="games" type="radio" />
      <span className="form__title">Games</span>
    </label>
  </React.Fragment>
);

export default SubPreference;
