import React, { PureComponent, Fragment } from 'react';

import PropTypes from 'prop-types';
import { Button } from 'grommet';
import PropertyInputs from '../property-inputs';
import { RemoveIcon } from '../../../assets/icons';
import * as constants from '../../../constants/validation-constants';

class EditTaskForm extends PureComponent {
  constructor() {
    super();

    this.errorNumbers = 0;
  }

  renderCustomInputs = key => {
    const {
      userInputGoalProperties,
      customProperties,
      updateCustomStateProperty,
    } = this.props;
    const customValidationRequired =
      userInputGoalProperties[key][constants.required];

    const validationType = userInputGoalProperties[key][constants.type];

    return (
      <PropertyInputs
        taskProperty={key}
        handleUpdateEditableTaskState={updateCustomStateProperty}
        storedTaskValue={`${customProperties[key]}`}
        customValidationRequired={customValidationRequired}
        validationType={validationType}
        removeFromErrorCount={this.removeFromErrorCount}
        addToErrorCount={this.addToErrorCount}
      />
    );
  };

  renderDefaultInputs = key => {
    const { defaultProperties, updateDefaultStateProperty } = this.props;

    return (
      <PropertyInputs
        taskProperty={key}
        handleUpdateEditableTaskState={updateDefaultStateProperty}
        storedTaskValue={`${defaultProperties[key]}`}
        removeFromErrorCount={this.removeFromErrorCount}
        addToErrorCount={this.addToErrorCount}
      />
    );
  };

  passedValidationUpdateTaskAndCloseModal = e => {
    e.preventDefault();
    const { updateTaskAndCloseModal } = this.props;

    if (this.errorNumbers === 0) {
      updateTaskAndCloseModal();
    } else {
      alert('NOT SUBMITABLE');
    }
  };

  addToErrorCount = () => {
    this.errorNumbers += 1;
  };

  removeFromErrorCount = () => {
    this.errorNumbers -= 1;
  };

  renderMappedProperties = (property, renderFunction) =>
    Object.keys(property).map(key => (
      <Fragment key={key}>{renderFunction(key)}</Fragment>
    ));

  render() {
    const { defaultProperties, customProperties } = this.props;
    return (
      <form
        style={{
          padding: '40px',
          overflowY: 'scroll',
          height: '100%',
        }}
      >
        {defaultProperties &&
          this.renderMappedProperties(
            defaultProperties,
            this.renderDefaultInputs
          )}
        {customProperties &&
          this.renderMappedProperties(
            customProperties,
            this.renderCustomInputs
          )}

        <div
          style={{
            display: 'flex',
            flexAlign: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="button"
            icon={<RemoveIcon height={24} width={24} />}
            label="Remove"
            color="status-error"
            style={{ margin: 5 }}
          />
          <Button
            type="submit"
            onClick={this.passedValidationUpdateTaskAndCloseModal}
            label="Update and Save"
            color="accent-1"
            style={{ margin: 5 }}
          />
        </div>
      </form>
    );
  }
}

EditTaskForm.propTypes = {
  userInputGoalProperties: PropTypes.shape({}).isRequired,
  defaultProperties: PropTypes.shape({}).isRequired,
  customProperties: PropTypes.shape({}).isRequired,
  updateDefaultStateProperty: PropTypes.func.isRequired,
  updateCustomStateProperty: PropTypes.func.isRequired,
  updateTaskAndCloseModal: PropTypes.func.isRequired,
};

export default EditTaskForm;
