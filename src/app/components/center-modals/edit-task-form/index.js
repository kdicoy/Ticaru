import React, { PureComponent, Fragment } from "react";

import { createEditableTaskObject } from "../edit-helpers";
import CustomTextInput from "../custom-text-input";
import * as constants from "../../../constants/validation-constants";

class EditTaskForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...createEditableTaskObject(props.task) };
  }
  updateTaskAndCloseModal = e => {
    const { task, updateWithEditedTaskAndCloseModal } = this.props;
    e.preventDefault();
    updateWithEditedTaskAndCloseModal(task, {
      ...task,
      ...this.state
    });
  };

  updateTaskState = value => {
    this.setState({ [key]: value });
  };

  renderInputs = key => {
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
        handleUpdateEditableTaskState={this.updateTaskState}
        storedTaskValue={`${this.state[key]}`}
        customValidationRequired={customValidationRequired}
        validationType={validationType}
      />
    );
  };
  render() {
    const { userInputGoalProperties } = this.props;

    return (
      <div style={{ padding: "40px", minWidth: "500px" }}>
        {Object.keys(this.state).map(key => this.renderInputs(key))}
        <button onClick={this.updateTaskAndCloseModal}>UPDATE AND SAVE</button>
      </div>
    );
  }
}

export default EditTaskForm;
