import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getModalContentState,
  getModalContentTypeState,
  getUserInputGoalPropertiesState,
} from '../../../../modules/selectors';
import { updateWithEditedTask } from '../../../../modules/actions/tasks';

import EditTaskForm from '../edit-task-form';
import EditGoalForm from '../edit-goal-form';
import {
  createEditableTaskObject,
  createEditableGoalObject,
} from '../edit-helpers';

class ModalContentContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { modalContent, modalContentType } = this.props;
    switch (modalContentType) {
      case 'task':
        this.setState({
          ...createEditableTaskObject(modalContent),
        });
        break;
      case 'goal':
        this.setState({
          ...createEditableGoalObject(modalContent),
        });
        break;
      default:
        break;
    }
  }

  componentWillUnmount() {
    const { closeModalAndClearConents } = this.props;
    closeModalAndClearConents();
  }

  updateState = (value, key) => {
    this.setState({ [key]: value });
  };

  updateTaskAndCloseModal = () => {
    const { modalContent } = this.props;

    this.updateWithEditedTaskAndCloseModal(modalContent, {
      ...modalContent,
      ...this.state,
    });
  };

  updateWithEditedTaskAndCloseModal = (previousTask, updatedTask) => {
    const { updateWithEditedTask, closeModalAndClearConents } = this.props;
    updateWithEditedTask(previousTask, updatedTask);
    closeModalAndClearConents();
  };

  render() {
    const {
      modalContentType,
      modalContent,
      userInputGoalProperties,
    } = this.props;
    return (
      <Fragment>
        {modalContentType === 'task' && (
          <EditTaskForm
            task={modalContent}
            updateState={this.updateState}
            updateTaskAndCloseModal={this.updateTaskAndCloseModal}
            userInputGoalProperties={userInputGoalProperties}
            editableTaskState={this.state}
          />
        )}
        {modalContentType === 'goal' && <EditGoalForm goal={modalContent} />}
      </Fragment>
    );
  }
}

ModalContentContainer.propTypes = {
  modalContent: PropTypes.shape({}).isRequired,
  modalContentType: PropTypes.string.isRequired,
  userInputGoalProperties: PropTypes.shape({}).isRequired,
  updateWithEditedTask: PropTypes.func.isRequired,
  closeModalAndClearConents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modalContent: getModalContentState(state),
  modalContentType: getModalContentTypeState(state),
  userInputGoalProperties: getUserInputGoalPropertiesState(state),
});

const mapDispatchToProps = { updateWithEditedTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContentContainer);
