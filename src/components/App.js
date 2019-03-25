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

  updateFormContent = (name, value) => {
    const formContent = { ...this.state.formContent };
    formContent[name] = value;
    if (name === 'preference' || (name === 'subPreferenceCheck' && value === false)) {
      formContent.subPreference = '';
    }
    this.setState(
      prevState => ({ formContent }),
    );
  };

  render() {
    return (
      <div className="wrapper">
        <div className="app">
          <h1>
            <span className="secondary-color">Signup </span>
            for our Newsletter
          </h1>
          <p>This is a work assignment for Påmind. Please enter your email address and preferences!</p>
          <Form
            handleForm={() => this.content.handleForm()}
            updateFormContent={this.updateFormContent}
            formContent={this.state.formContent}
          />
        </div>
        <Debugger
          ref={(instance) => { this.content = instance; }}
          formContent={this.state.formContent}
        />
      </div>
    );
  }
}

export default App;
