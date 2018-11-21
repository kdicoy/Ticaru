import React, { PureComponent, Fragment } from "react";

import { createEditableTaskObject } from "../edit-helpers";
import CustomTextInput from "../custom-text-input";
import * as constants from "../../../constants/validation-constants";

class EditTaskForm extends PureComponent {
  state = {
    error: ""
  };
  renderCustomInput = key => {
    userInputGoalProperties[key] &&
    userInputGoalProperties[key][constants.required]
      ? true
      : false;
    let validationType = customValidationRequired
      ? userInputGoalProperties[key][constants.type]
      : false;

    return (
      <CustomTextInput
        taskProperty={key}
        handleUpdateEditableTaskState={this.updateState}
        storedTaskValue={`${this.state[key]}`}
        customValidationRequired={customValidationRequired}
        validationType={validationType}
        setErrorState={this.setErrorState}
      />
    );
  };
  passedValidationUpdateTaskAndCloseModal = () => {
    if (this.state.error) {
      alert(this.state.error);
    } else {
      this.props.updateTaskAndCloseModal();
    }
  };
  setErrorState = error => {
    this.setState({ error });
  };

  render() {
    return (
      <div style={{ padding: "40px", minWidth: "500px" }}>
        {Object.keys(this.props.editableTaskState).map(key =>
          this.renderCustomInput(key)
        )}
        <button onClick={this.updateTaskAndCloseModal}>UPDATE AND SAVE</button>
      </div>
    );
  }
}

export default EditTaskForm;
