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
        <Email updateEmail={this.props.updateEmail} email={this.props.formContent.email} />
        <Preference email={this.props.formContent.email} preference={this.props.formContent.preference} />
        <SubPreferenceToggle />
        <SubPreference />
        <button className="button button--disabled" onClick={this.handleForm} type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
