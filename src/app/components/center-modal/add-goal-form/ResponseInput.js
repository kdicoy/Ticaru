import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormField, TextInput } from 'grommet';

class ResponseInput extends PureComponent {
  render() {
    const { questionText, currentInput, handleCurrentInputChange } = this.props;

    return (
      <FormField label={questionText}>
        <TextInput value={currentInput} onChange={handleCurrentInputChange} />
      </FormField>
    );
  }
}

ResponseInput.propTypes = {
  currentInput: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  handleCurrentInputChange: PropTypes.func.isRequired,
};
export default ResponseInput;
