import React, { PureComponent, Fragment } from 'react';
import { TextInput } from 'grommet';
import { baseInputCoersion, defaultTaskInputCoersion } from '../edit-helpers';
import * as constants from '../../../constants/validation-constants';
import DaySelect from './DaySelect';

class CustomTextInput extends PureComponent {
  state = {
    error: '',
  };

  componentDidMount() {
    const {
      storedTaskValue,
      customValidationRequired,
      addToErrorCount,
    } = this.props;
    if (storedTaskValue.length === 0 && customValidationRequired) {
      this.setState({ error: constants.required });
      addToErrorCount();
    }
  }

  setOrRemoveError = (value, validationRequired = false) => {
    const { removeFromErrorCount, addToErrorCount } = this.props;
    const { error } = this.state;
    if (value.length === 0) {
      if (validationRequired) {
        this.setState({ error: constants.required });
        addToErrorCount();
      }
    } else if (error) {
      this.setState({ error: '' });
      removeFromErrorCount();
    }
  };

  handleUpdateEditableTaskStateAndCoerce = event => {
    const {
      taskProperty,

      customValidationRequired,
      validationType,
    } = this.props;

    const { value } = event.target;

    if (validationType) {
      if (baseInputCoersion(value, validationType)) {
        this.coersedInputAndSetSubmittable(value);
      }
      return this.setOrRemoveError(value, customValidationRequired);
    }
    if (defaultTaskInputCoersion(value, taskProperty)) {
      this.coersedInputAndSetSubmittable(value);
    }
    return this.setOrRemoveError(value, true);
  };

  coersedInputAndSetSubmittable = value => {
    const { handleUpdateEditableTaskState, taskProperty } = this.props;
    handleUpdateEditableTaskState(value, taskProperty);
  };

  renderProperInputField = () => {
    const {
      taskProperty,
      storedTaskValue,
      handleUpdateEditableTaskState,
    } = this.props;
    switch (taskProperty) {
      case 'day':
        return (
          <DaySelect
            value={storedTaskValue}
            taskProperty={taskProperty}
            handleUpdateEditableTaskState={handleUpdateEditableTaskState}
          />
        );
      default:
        return (
          <div>
            <label>{taskProperty}</label>
            <TextInput
              value={storedTaskValue}
              onChange={this.handleUpdateEditableTaskStateAndCoerce}
              style={{ borderColor: this.state.error && '#ff0240' }}
            />
            <label style={{ color: '#ff0240' }}>{this.state.error}</label>
          </div>
        );
    }
  };

  render() {
    return <React.Fragment>{this.renderProperInputField()}</React.Fragment>;
  }
}

export default CustomTextInput;
