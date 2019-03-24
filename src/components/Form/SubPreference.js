import React from 'react';

const SubPreference = () => (
  <React.Fragment>
    <label htmlFor="security">
      <input className="form__radio" id="security" name="subPreference" value="security" type="radio" />
      <h4 className="form__title">Security</h4>
    </label>
    <label htmlFor="computers">
      <input className="form__radio" id="computers" name="subPreference" value="computers" type="radio" />
      <h4 className="form__title">Computers</h4>
    </label>
    <label htmlFor="games">
      <input className="form__radio" id="games" name="subPreference" value="games" type="radio" />
      <h4 className="form__title">Games</h4>
    </label>
  </React.Fragment>
);

export default SubPreference;
