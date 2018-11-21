import React, { PureComponent } from "react";
import { customValidation, defaultValidation } from "../edit-helpers";

class CustomTextInput extends PureComponent {
  handleUpdateEditableTaskStateAndValidate = event => {
    const {
      setErrorState,
      taskProperty,
      updateTaskState,
      customValidationRequired,
      validationType
    } = this.props;

    if (customValidationRequired && validationType) {
      setErrorState({
        error: customValidation(event.target.value, customUserValidation)
      });
    } else {
      setErrorState({
        error: defaultValidation(event.target.value, taskProperty)
      });
    }

    updateTaskState(event.target.value);
  };
  render() {
    const { taskProperty, storedTaskValue } = this.props;
    return (
      <Fragment key={taskProperty}>
        <label>{taskProperty}</label>
        <TextInput
          value={storedTaskValue}
          onChange={handleUpdateEditableTaskState}
          style={{ borderColor: this.state.error }}
        />
      </Fragment>
    );
  }
}

export default CustomTextInput;
