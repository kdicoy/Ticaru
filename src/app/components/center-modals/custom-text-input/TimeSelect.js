import React, { PureComponent } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Menu } from 'grommet';
import TimePicker from './TimePicker';

const format = 'h:mm a';

class TimeSelect extends PureComponent {
  constructor(props) {
    super(props);
    const momentValue = moment(props.value, format);
    const hour = momentValue.format('h');
    const minute = momentValue.format('mm');
    const post = momentValue.format('a');

    this.state = {
      hour,
      minute,
      post,
    };

    this.now = moment()
      .hour(0)
      .minute(0);
  }

  handleUpdateEditableTaskStateWithTimePicker = value => {
    if (value) {
      const { taskProperty, handleUpdateEditableTaskState } = this.props;

      handleUpdateEditableTaskState(value.format(format), taskProperty);
    }
  };

  render() {
    const { value } = this.props;
    const { minute, hour, post } = this.state;
    return (
      <Menu
        label={value}
        items={[
          {
            label: (
              <TimePicker
                hour={hour}
                minute={minute}
                post={post}
                onChange={this.handleUpdateEditableTaskStateWithTimePicker}
                format={format}
              />
            ),
          },
        ]}
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
