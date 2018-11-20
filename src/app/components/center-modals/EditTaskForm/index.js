import React, { PureComponent, Fragment } from "react";
import { TextInput } from "grommet";
import { createEditableTaskObject } from "../EditHelpers";

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

  render() {
    return (
      <div style={{ padding: "40px", minWidth: "500px" }}>
        {Object.keys(this.state).map(key => {
          return (
            <Fragment key={key}>
              {key}:
              <TextInput
                value={`${this.state[key]}`}
                onChange={event => this.setState({ [key]: event.target.value })}
              />
            </Fragment>
          );
        })}

        <button onClick={this.updateTaskAndCloseModal}>UPDATE AND SAVE</button>
      </div>
    );
  }
}

export default EditTaskForm;
