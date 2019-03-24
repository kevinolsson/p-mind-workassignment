import React from 'react';

const Email = () => (
  <label htmlFor="email">
    <h4 className="form__title">Email Address</h4>
    <input className="form__input" placeholder="john@doe.com" id="email" type="email" />
  </label>
);

export default Email;
