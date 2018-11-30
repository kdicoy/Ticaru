import React, { PureComponent } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DropButton } from 'grommet';
import TimePicker from './TimePicker';

const userReadabilityFormat = 'h:mm a';
const timePickerFormat = 'HH:mm';

const fromReadableToPickerFormat = value =>
  moment(value, userReadabilityFormat).format(timePickerFormat);

class TimeSelect extends PureComponent {
  constructor(props) {
    super(props);
    const timeValue = fromReadableToPickerFormat(props.value);

    this.state = {
      timeValue,
      open: false,
    };

    this.now = moment()
      .hour(0)
      .minute(0);
  }

  handleUpdateTime = event => {
    this.setState({ timeValue: event.target.value });
  };

  renderTimePicker = () => {
    const { timeValue } = this.state;
    console.log(timeValue, 'timeValue');
    return (
      <TimePicker
        handleUpdateTime={this.handleUpdateTime}
        timeValue={timeValue}
        updateAndClose={this.updateAndClose}
      />
    );
  };

  updateAndClose = () => {
    const { taskProperty, handleUpdateEditableTaskState } = this.props;
    const { timeValue } = this.state;
    const unformatedTime = moment(timeValue, timePickerFormat);
    this.setState({ open: false });

    if (unformatedTime.isValid()) {
      const userFormatedTime = unformatedTime.format(userReadabilityFormat);
      handleUpdateEditableTaskState(userFormatedTime, taskProperty);
    }
  };

  closeNoSave = () => {
    const { value } = this.props;
    this.setState({
      open: false,
      timeValue: fromReadableToPickerFormat(value),
    });
  };

  render() {
    const { value } = this.props;
    const { open } = this.state;
    return (
      <DropButton
        label={`${value}`}
        open={open}
        onClick={() => this.setState({ open: true })}
        onClose={this.closeNoSave}
        dropContent={this.renderTimePicker()}
        style={{ width: '100%' }}
      />
    );
  }
}

TimeSelect.propTypes = {
  taskProperty: PropTypes.string.isRequired,
  handleUpdateEditableTaskState: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TimeSelect;
