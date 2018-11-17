import React from "react";
import InputGoalField from "./input-goal-field";

export const GoalCard = ({ goal, resolveGoal }) => {
  const {
    id,
    quarterly,
    monthly,
    weekly,
    end_date,
    start_date,
    color,
    backgroundColor
  } = goal;
  return (
    <div
      style={{
        color,
        backgroundColor,
        padding: "8px",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }}
    >
      <InputGoalField goalType="Final Goal" goalInitialInput={id} />
      <InputGoalField goalType="Quarterly Goal" goalInitialInput={quarterly} />
      <InputGoalField goalType="Monthly Goal" goalInitialInput={monthly} />
      <InputGoalField
        goalType="Weekly Goal"
        timeToUpdate={true}
        goalInitialInput={weekly}
      />
      <div>Start Date: {start_date}</div>
      <div>End Date: {end_date}</div>
      <button className="resolve-circle-button" onClick={resolveGoal(goal.id)}>
        <i className="ion-ios-arrow-down" />
      </button>
    </div>
  );
};

export default GoalCard;
