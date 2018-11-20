import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getModalContentState,
  getModalIsOpenState,
  getModalContentTypeState
} from "../../../modules/selectors";
import { closeModalAndClearConents } from "../../../modules/actions/modal";
import { updateWithEditedTask } from "../../../modules/actions/tasks";
//import { updateGoal } from '../../modules/actions/modal'
import EditTaskForm from "./EditTaskForm";
import EditGoalForm from "./EditGoalForm";
import { Box, Layer } from "grommet";

class CenterModal extends PureComponent {
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
      modalContent
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
                updateWithEditedTaskAndCloseModal={
                  this.updateWithEditedTaskAndCloseModal
                }
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
    modalIsOpen: getModalIsOpenState(state)
  };
};

const mapDispatchToProps = { closeModalAndClearConents, updateWithEditedTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterModal);
