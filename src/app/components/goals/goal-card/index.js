import React from "react";

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
      <div>Final Goal: {id}</div>
      <div>Quarterly Goal: {quarterly}</div>
      <div>Monthly Goal: {monthly}</div>
      <div>Weekly Goal: {weekly}</div>
      <div>Start Date: {start_date}</div>
      <div>End Date: {end_date}</div>
      <button className="resolve-circle-button" onClick={resolveGoal(goal.id)}>
        <i className="ion-ios-arrow-down" />
      </button>
    </div>
  );
};

export default GoalCard;
