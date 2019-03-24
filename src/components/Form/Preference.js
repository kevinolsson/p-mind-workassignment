import React from 'react';

const Preference = () => (
  <label htmlFor="preference">
    <h4 className="form__title">Preference:</h4>
    <div className="form__dropdown">
      <select defaultValue="" id="preference">
        <option value="" disabled hidden>Select preference</option>
        <option value="IT">IT</option>
        <option value="Fitness">Fitness</option>
        <option value="Bikes">Bikes</option>
        <option value="3D Printing">3D Printing</option>
      </select>
    </div>
  </label>
);

export default Preference;
