import React from "react";

export const TaskComponent = ({ item, resolveTask, day, goalColors }) => {
  const { task, time, time_duration, time_units, difficulty, points } = item;
  return (
    <div
      style={{
        borderRadius: "5px",
        padding: 10,
        backgroundColor: "lightblue",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        ...goalColors
      }}
    >
      <div>{task}</div>
      <div>{time}</div>
      <div>
        {time_duration} {time_units}
      </div>
      <div>
        {difficulty}
        /8
      </div>
      <div>{points} points</div>

      <button
        className="resolve-circle-button"
        onClick={() => resolveTask(item.id, day)}
      >
        <i className="ion-ios-arrow-down" />
      </button>
    </div>
  );
};

export default TaskComponent;
