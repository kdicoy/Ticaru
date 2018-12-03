import React from 'react';
import InputGoalField from './inputGoalField';

const GoalCard = ({ goal, resolveGoal }) => {
  const {
    id,
    quarterly,
    monthly,
    weekly,
    endDate,
    startDate,
    color,
    backgroundColor,
  } = goal;
  return (
    <div
      style={{
        color,
        backgroundColor,
        padding: '8px',
        borderRadius: '5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <InputGoalField goalType="Final Goal" goalInitialInput={id} />
      {quarterly && (
        <InputGoalField
          goalType="Quarterly Goal"
          goalInitialInput={quarterly}
        />
      )}
      {quarterly && (
        <InputGoalField goalType="Monthly Goal" goalInitialInput={monthly} />
      )}
      <InputGoalField goalType="Weekly Goal" goalInitialInput={weekly} />
      <div>
        Start Date:
        {startDate}
      </div>
      <div>
        End Date:
        {endDate}
      </div>
      <button className="resolve-circle-button" onClick={resolveGoal(goal.id)}>
        <i className="ion-ios-arrow-down" />
      </button>
    </div>
  );
};

export default GoalCard;
