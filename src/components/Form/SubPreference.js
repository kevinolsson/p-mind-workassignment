import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

class SubPreference extends React.Component {
  render() {
    let array = [];
    const { preference, subPreference } = this.props.formContent;
    switch (preference) {
      case 'IT': {
        array = ['Security', 'Computers', 'Games'];
        break;
      }
      case 'Fitness': {
        array = ['Running', 'Walking', 'Jumping'];
        break;
      }
      case 'Bikes': {
        array = ['One Wheel', 'Two Wheels', 'Three Wheels'];
        break;
      }
      case '3D Printing': {
        array = ['SLA', 'DLP', 'FDM'];
        break;
      }
      default: {
        array = [];
      }
    }

    return (
      <div className="radio-button">
        { array.length === 0 ? null : <h4>I am specifically interested in: *</h4> }
        {Object.keys(array).map(key => (
          <RadioButton
            key={key}
            subject={array[key]}
            subPreference={subPreference}
            formContent={this.props.formContent}
            updateFormContent={this.props.updateFormContent}
          />
        ))}
      </div>
    );
  }
}

SubPreference.propTypes = {
  updateFormContent: PropTypes.func,
  formContent: PropTypes.shape({
    preference: PropTypes.string,
    subPreference: PropTypes.string,
  }),
};


export default SubPreference;
