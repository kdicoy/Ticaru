import React, { PureComponent } from 'react';
import { RangeInput } from 'grommet';
import PropTypes from 'prop-types';

class DifficultySlider extends PureComponent {
  constructor() {
    super();

    this.difficulty = ['very easy', 'somewhat easy', 'medium', 'hard'];
  }

  handleUpdateEditableTaskStateWithSlider = event => {
    const { taskProperty, handleUpdateEditableTaskState } = this.props;
    const { value } = event.target;

    handleUpdateEditableTaskState(value, taskProperty);
  };

  render() {
    const { value } = this.props;
    return (
      <React.Fragment>
        <RangeInput
          value={value}
          min={0}
          max={3}
          step={1}
          onChange={this.handleUpdateEditableTaskStateWithSlider}
        />
        {this.difficulty[value]}
      </React.Fragment>
    );
  }
}

DifficultySlider.propTypes = {
  taskProperty: PropTypes.string.isRequired,
  handleUpdateEditableTaskState: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default DifficultySlider;
