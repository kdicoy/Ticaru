import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TextInput, FormField } from 'grommet';
import { baseInputCoersion, defaultTaskInputCoersion } from '../edit-helpers';
import * as constants from '../../../constants/validation-constants';
import CustomSelect from '../custom-input-components/CustomSelect';
import DifficultySlider from '../custom-input-components/DifficultySlider';
import TimeSelect from '../custom-input-components/TimeSelect';
import { days, timeUnits } from '../../../constants/general-constants';

class PropertyInputs extends PureComponent {
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
      handleUpdateEditableTaskState,
    } = this.props;

    const { value } = event.target;

    if (validationType) {
      if (baseInputCoersion(value, validationType)) {
        handleUpdateEditableTaskState(value, taskProperty);
      }
      return this.setOrRemoveError(value, customValidationRequired);
    }
    if (defaultTaskInputCoersion(value, taskProperty)) {
      handleUpdateEditableTaskState(value, taskProperty);
    }
    return this.setOrRemoveError(value, true);
  };

  renderProperInputField = () => {
    const {
      taskProperty,
      storedTaskValue,
      handleUpdateEditableTaskState,
      validationType,
    } = this.props;

    switch (taskProperty) {
      case 'day':
        return (
          <CustomSelect
            value={storedTaskValue}
            taskProperty={taskProperty}
            handleUpdateEditableTaskState={handleUpdateEditableTaskState}
            options={Object.keys(days)}
          />
        );
      case 'difficulty':
        return (
          <DifficultySlider
            value={storedTaskValue}
            taskProperty={taskProperty}
            handleUpdateEditableTaskState={handleUpdateEditableTaskState}
          />
        );
      case 'time':
        return (
          <TimeSelect
            value={storedTaskValue}
            taskProperty={taskProperty}
            handleUpdateEditableTaskState={handleUpdateEditableTaskState}
            options={timeUnits}
          />
        );
      case 'timeUnits':
        return (
          <CustomSelect
            value={storedTaskValue}
            taskProperty={taskProperty}
            handleUpdateEditableTaskState={handleUpdateEditableTaskState}
            options={Object.keys(timeUnits)}
          />
        );
      case 'timeDuration':
        return (
          <TextInput
            type="number"
            value={storedTaskValue}
            onChange={this.handleUpdateEditableTaskStateAndCoerce}
          />
        );
      default:
        return (
          <TextInput
            type={validationType || 'text'}
            value={storedTaskValue}
            onChange={this.handleUpdateEditableTaskStateAndCoerce}
          />
        );
    }
  };

  outerFormFieldWrapper = () => {
    const { taskProperty } = this.props;
    const { error } = this.state;
    return (
      <FormField
        label={`${taskProperty}`}
        error={error}
        htmlFor={`${taskProperty}`}
      >
        {this.renderProperInputField()}
      </FormField>
    );
  };

  render() {
    return <Fragment>{this.outerFormFieldWrapper()}</Fragment>;
  }
}

PropertyInputs.propTypes = {
  handleUpdateEditableTaskState: PropTypes.func.isRequired,
  taskProperty: PropTypes.string.isRequired,
  validationType: PropTypes.string,
  removeFromErrorCount: PropTypes.func.isRequired,
  storedTaskValue: PropTypes.string.isRequired,
  customValidationRequired: PropTypes.bool.isRequired,
  addToErrorCount: PropTypes.func.isRequired,
};

PropertyInputs.defaultProps = {
  validationType: '',
};

export default PropertyInputs;
