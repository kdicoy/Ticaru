import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getModalContentState,
  getModalIsOpenState,
  getModalContentTypeState,
  getUserInputGoalPropertiesState
} from "../../../modules/selectors";
import { closeModalAndClearConents } from "../../../modules/actions/modal";
import { updateWithEditedTask } from "../../../modules/actions/tasks";
//import { updateGoal } from '../../modules/actions/modal'
import EditTaskForm from "./edit-task-form";
import EditGoalForm from "./edit-goal-form";
import { Box, Layer } from "grommet";
import {
  createEditableTaskObject,
  createEditableGoalObject
} from "./edit-helpers";

class CenterModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...createEditableTaskObject(props.task) };
    switch (props.modalContentType) {
      case "task":
        this.state = { ...createEditableTaskObject(props.task) };
        break;
      case "goal":
        this.state = { ...createEditableGoalObject(props.task) };
        break;
      default:
        break;
    }
  }
  updateState = value => {
    this.setState({ [key]: value });
  };
  updateWithEditedTaskAndCloseModal = (previousTask, updatedTask) => {
    const { updateWithEditedTask, closeModalAndClearConents } = this.props;
    console.log(previousTask, "previous Task", updatedTask, "updatedTask");
    updateWithEditedTask(previousTask, updatedTask);
    closeModalAndClearConents();
  };

  render() {
    const {
      modalIsOpen,
      modalContentType,
      closeModalAndClearConents,
      modalContent,
      userInputGoalProperties
    } = this.props;
    return (
      <Box align="start">
        {modalIsOpen && (
          <Layer
            position="center"
            full="vertical"
            modal
            onClickOutside={closeModalAndClearConents}
            onEsc={closeModalAndClearConents}
            margin="medium"
          >
            {modalContentType === "task" && (
              <EditTaskForm
                task={modalContent}
                updateState={this.updateState}
                updateWithEditedTaskAndCloseModal={
                  this.updateWithEditedTaskAndCloseModal
                }
                userInputGoalProperties={userInputGoalProperties}
                editableTaskState={this.state}
              />
            )}
            {modalContentType === "goal" && (
              <EditGoalForm goal={modalContent} />
            )}
          </Layer>
        )}
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalContent: getModalContentState(state),
    modalContentType: getModalContentTypeState(state),
    modalIsOpen: getModalIsOpenState(state),
    userInputGoalProperties: getUserInputGoalPropertiesState(state)
  };
};

const mapDispatchToProps = { closeModalAndClearConents, updateWithEditedTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterModal);
