import React from 'react';
import Email from './Form/Email';
import Preference from './Form/Preference';
import SubPreferenceToggle from './Form/SubPreferenceToggle';
import SubPreference from './Form/SubPreference';

class Form extends React.Component {
  handleForm = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className="form">
        <Email />
        <Preference />
        <SubPreferenceToggle />
        <SubPreference />
        <button className="button button--primary" onClick={this.handleForm} type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
