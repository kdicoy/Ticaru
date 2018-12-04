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
import { ExitIcon } from '../../../assets/icons';
import * as constants from '../../../constants/modal-constants';
import AddGoalForm from '../add-goal-form';

class ModalContentContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { modalContent, modalContentType } = this.props;
    switch (modalContentType) {
      case constants.EDIT_TASK:
        this.setState(createEditableTaskObject(modalContent));
        break;
      case constants.EDIT_GOAL:
        this.setState({
          ...createEditableGoalObject(modalContent),
        });
        break;
      case constants.ADD_TASK:
        break;
      case constants.ADD_GOAL:
        break;
      default:
        break;
    }
  }

  componentWillUnmount() {
    const { closeModalAndClearConents } = this.props;
    closeModalAndClearConents();
  }

  updateDefaultStateProperty = (value, key) => {
    this.setState({ [key]: value });
  };

  updateCustomStateProperty = (value, key) => {
    const { customProperties } = this.state;
    this.setState({
      customProperties: { ...customProperties, [key]: value },
    });
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
      closeModalAndClearConents,
    } = this.props;
    const { customProperties, ...defaultProperties } = this.state;

    return (
      <Fragment>
        <button
          type="button"
          onClick={() => closeModalAndClearConents()}
          className="remove-default-button-style"
          style={{
            position: 'absolute',
            right: '25px',
            top: '5px',
            width: 36,
            height: 36,
            cursor: 'pointer',
          }}
        >
          <ExitIcon width={36} height={36} />
        </button>
        {modalContentType === constants.EDIT_TASK && (
          <EditTaskForm
            task={modalContent}
            updateDefaultStateProperty={this.updateDefaultStateProperty}
            updateCustomStateProperty={this.updateCustomStateProperty}
            updateTaskAndCloseModal={this.updateTaskAndCloseModal}
            userInputGoalProperties={userInputGoalProperties}
            defaultProperties={defaultProperties}
            customProperties={customProperties}
          />
        )}
        {modalContentType === constants.EDIT_GOAL && (
          <EditGoalForm goal={modalContent} />
        )}
        {modalContentType === constants.ADD_GOAL && (
          <AddGoalForm closeModalAndClearConents={closeModalAndClearConents} />
        )}
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
