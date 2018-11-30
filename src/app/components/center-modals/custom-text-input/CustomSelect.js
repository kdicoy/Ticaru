import React, { PureComponent } from 'react';
import { Select } from 'grommet';
import PropTypes from 'prop-types';
import { days } from '../../../constants/general-constants';

class CustomSelect extends PureComponent {
  constructor() {
    super();

    this.options = Object.keys(days);
  }

  handleUpdateEditableTaskStateWithDrop = ({ option }) => {
    console.log(option, 'OPTION');
    const { taskProperty, handleUpdateEditableTaskState } = this.props;
    console.log(option, taskProperty, 'OPTION TASK PROP');
    handleUpdateEditableTaskState(option, taskProperty);
  };

  render() {
    const { value, options } = this.props;
    return (
      <Select
        id="select"
        name="select"
        placeholder="Select"
        value={value}
        options={options}
        onChange={this.handleUpdateEditableTaskStateWithDrop}
        style={{ border: '0px' }}
      />
    );
  }
}

CustomSelect.propTypes = {
  taskProperty: PropTypes.string.isRequired,
  handleUpdateEditableTaskState: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.shape([]).isRequired,
};

export default CustomSelect;
