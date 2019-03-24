import React from 'react';

const Email = () => (
  <label htmlFor="email">
    <span className="form__title">Email Address</span>
    <input className="form__input" placeholder="john@doe.com" id="email" type="email" />
  </label>
);

export default Email;
