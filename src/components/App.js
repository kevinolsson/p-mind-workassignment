import React from 'react';
import Form from './Form';
import Debugger from './Debugger';

class App extends React.Component {
  state = {
    formContent: {
      email: '',
      preference: '',
      subPreferenceToggle: false,
      subPreference: '',
    },
  };

  updateFormContent = (name, value) => {
    const formContent = { ...this.state.formContent };
    formContent[name] = value;
    if (name === 'preference' || (name === 'subPreferenceToggle' && value === false)) {
      formContent.subPreference = '';
    }
    this.setState(
      prevState => ({ formContent }),
    );
  };

  render() {
    return (
      <div className="app">
        <Form
          handleForm={() => this.content.handleForm()}
          updateFormContent={this.updateFormContent}
          formContent={this.state.formContent}
        />
        <Debugger
          ref={(instance) => { this.content = instance; }}
          formContent={this.state.formContent}
        />
      </div>
    );
  }
}

export default App;
