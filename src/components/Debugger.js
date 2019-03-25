import React from 'react';
import PropTypes from 'prop-types';

class Debugger extends React.Component {
  state = null;

  handleForm = () => {
    this.setState(
      prevState => ({ ...this.props.formContent }),
    );
  }

  render() {
    return (
      <div className="debugger">
        <div className="debugger__content">
          {(this.state !== null)
            ? <p>{JSON.stringify(this.state)}</p>
            : <p>Output will appear here</p>
          }
        </div>
      </div>
    );
  }
}

Debugger.propTypes = {
  formContent: PropTypes.shape({
    email: PropTypes.string,
    preference: PropTypes.string,
    subPreferenceCheck: PropTypes.bool,
    subPreference: PropTypes.string,
  }),
};

export default Debugger;
