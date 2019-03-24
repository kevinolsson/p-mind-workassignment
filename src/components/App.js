import React from 'react';
import Form from './Form';
import Debugger from './Debugger';

class App extends React.Component {
  state = {
    formContent: {
      email: null,
      preference: null,
      subPreferenceCheck: false,
      subPreference: null,
    },
  };

  updateEmail = (value) => {
    const formContent = { ...this.state.formContent };
    formContent.email = value;
    this.setState({
      formContent: formContent
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <h1>
            <span className="secondary-color">Signup </span>
            for our Newsletter
          </h1>
          <p>This is a work assignment for Påmind. Please enter your email address and preferences!</p>
          <Form updateEmail={this.updateEmail} formContent={this.state.formContent} />
          <Debugger formContent={this.state.formContent} />
        </div>
        <div className="app__background" />
      </React.Fragment>
    );
  }
}

export default App;
