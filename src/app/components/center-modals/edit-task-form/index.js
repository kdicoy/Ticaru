import React, { PureComponent, Fragment } from 'react';

import PropTypes from 'prop-types';
import CustomTextInput from '../custom-text-input';
import * as constants from '../../../constants/validation-constants';

class EditTaskForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorNumbers: 0,
    };
  }

  renderCustomInput = key => {
    const {
      userInputGoalProperties,
      editableTaskState,
      updateState,
    } = this.props;

    const customValidationRequired = !!(
      userInputGoalProperties[key] &&
      userInputGoalProperties[key][constants.required]
    );
    const validationType = customValidationRequired
      ? userInputGoalProperties[key][constants.type]
      : false;

    return (
      <CustomTextInput
        taskProperty={key}
        handleUpdateEditableTaskState={updateState}
        storedTaskValue={`${editableTaskState[key]}`}
        customValidationRequired={customValidationRequired}
        validationType={validationType}
        removeFromErrorCount={this.removeFromErrorCount}
        addToErrorCount={this.addToErrorCount}
      />
    );
  };

  passedValidationUpdateTaskAndCloseModal = e => {
    e.preventDefault();
    const { updateTaskAndCloseModal } = this.props;
    const { errorNumbers } = this.state;

    if (errorNumbers === 0) {
      updateTaskAndCloseModal();
    } else {
      alert('NOT SUBMITABLE');
    }
  };

  addToErrorCount = () => {
    const { errorNumbers } = this.state;
    this.setState({ errorNumbers: errorNumbers + 1 });
  };

  removeFromErrorCount = () => {
    const { errorNumbers } = this.state;

    this.setState({ errorNumbers: errorNumbers - 1 });
  };

  render() {
    const { editableTaskState } = this.props;
    return (
      <div
        style={{
          padding: '40px',
          overflowY: 'scroll',
          height: '100%',
        }}
      >
        {Object.keys(editableTaskState).map(key => (
          <Fragment key={key}>{this.renderCustomInput(key)}</Fragment>
        ))}
        <button
          type="submit"
          onClick={this.passedValidationUpdateTaskAndCloseModal}
        >
          UPDATE AND SAVE
        </button>
      </div>
    );
  }
}

EditTaskForm.propTypes = {
  userInputGoalProperties: PropTypes.shape({}).isRequired,
  editableTaskState: PropTypes.shape({}).isRequired,
  updateState: PropTypes.func.isRequired,
  updateTaskAndCloseModal: PropTypes.func.isRequired,
};

export default EditTaskForm;
