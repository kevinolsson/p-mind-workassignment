import React from 'react';
import Form from './Form';
import Debugger from './Debugger';

class App extends React.Component {
  state = {
    formContent: {
      email: '',
      preference: '',
      subPreferenceCheck: false,
      subPreference: '',
    },
  };

  updateFormContent = (value) => {
    let formContent = { ...this.state.formContent };
    formContent = value;
    this.setState(
      prevState => ({ formContent }),
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <h1>
            <span className="secondary-color">Signup </span>
            for our Newsletter
          </h1>
          <p>This is a work assignment for Påmind. Please enter your email address and preferences!</p>
          <Form updateFormContent={this.updateFormContent} formContent={this.state.formContent} />
          <Debugger formContent={this.state.formContent} />
        </div>
        <div className="app__background" />
      </React.Fragment>
    );
  }
}

export default App;
