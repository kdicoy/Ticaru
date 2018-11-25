import React from 'react';
import PropTypes from 'prop-types';

const EditGoalForm = ({ goal }) => (
  <div style={{ width: 500, height: 500 }}>{`${goal}`}</div>
);

EditGoalForm.propTypes = {
  goal: PropTypes.shape({}).isRequired,
};
export default EditGoalForm;
