import React from "react";

const TaskComponent = ({ item, resolveItem, day }) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "row",
        justifyContent: "space-between"
      }}
    >
      <div>{item.content}</div>
      <button
        className="resolve-circle-button"
        onClick={resolveItem(item.id, day)}
      >
        <i className="ion-ios-arrow-down" />
      </button>
    </div>
  );
};

export default TaskComponent;
