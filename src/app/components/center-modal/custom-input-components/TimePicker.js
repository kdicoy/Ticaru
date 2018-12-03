import React from 'react';
import PropTypes from 'prop-types';
import { FormField, TextInput } from 'grommet';

const TimePicker = ({ timeValue, handleUpdateTime, updateAndClose }) => {
  console.log(timeValue, 'TIME VALUE IN TIME PICKER');
  return (
    <FormField>
      <TextInput
        id="text-input"
        placeholder="placeholder"
        value={timeValue}
        type="time"
        onChange={handleUpdateTime}
        size="small"
        style={{ textAlign: 'center' }}
      />
      <button
        onClick={updateAndClose}
        type="submit"
        style={{ textAlign: 'center' }}
      >
        submit
      </button>
    </FormField>
  );
};

TimePicker.propTypes = {
  timeValue: PropTypes.string.isRequired,
  handleUpdateTime: PropTypes.func.isRequired,
  updateAndClose: PropTypes.func.isRequired,
};

export default TimePicker;
