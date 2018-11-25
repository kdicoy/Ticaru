import React, { PureComponent } from 'react';
import { days } from '../../../constants/general-constants';
import { Select } from 'grommet';

class DaySelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.options = Object.keys(days);
  }

  handleUpdateEditableTaskStateWithSlider = ({ option }) => {
    console.log(option, 'OPTION');
    const { taskProperty, handleUpdateEditableTaskState } = this.props;
    console.log(option, taskProperty, 'OPTION TASK PROP');
    handleUpdateEditableTaskState(option, taskProperty);
  };

  render() {
    const { value } = this.state;
    return (
      <Select
        id="select"
        name="select"
        placeholder="Select"
        value={this.props.value}
        options={this.options}
        onChange={this.handleUpdateEditableTaskStateWithSlider}
      />
    );
  }
}

export default DaySelect;
