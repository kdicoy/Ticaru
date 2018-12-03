import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormField, TextInput } from 'grommet';

class ResponseInput extends PureComponent {
  render() {
    const { questionText } = this.props;

    return (
      <FormField label={questionText}>
        <TextInput />
      </FormField>
    );
  }
}

ResponseInput.propTypes = {
  currentStep: PropTypes.number.isRequired,
  expectedStep: PropTypes.number.isRequired,
  questionText: PropTypes.string.isRequired,
};
export default ResponseInput;
