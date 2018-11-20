// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

export const getTaskStyle = (isDragging, draggableStyle) => ({
  height: "auto",

  margin: `0 0 ${grid}px 0`,
  borderRadius: "5px",
  width: "100%",
  display: "flex",
  userSelect: "none",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  // change background colour if dragging
  //background: isDragging ? "#6AFF5E" : "#6AFF5E",

  // styles we need to apply on draggables
  ...draggableStyle
});

export const getTaskListStyle = isDraggingOver => ({
  background: isDraggingOver
    ? "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 10px, rgba(0, 0, 0, 0.3) 10px, rgba(0, 0, 0, 0.3) 20px)"
    : "white",
  padding: grid,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export const getGoalStyle = (isDragging, draggableStyle) => ({
  height: "auto",

  margin: `5px`,
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignContent: "column",
  justifyContent: "start",
  // change background colour if dragging
  //background: isDragging ? "#6AFF5E" : "#6AFF5E",

  // styles we need to apply on draggables
  ...draggableStyle
});

export const getGoalListStyle = isDraggingOver => ({
  background: isDraggingOver
    ? "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 10px, rgba(0, 0, 0, 0.3) 10px, rgba(0, 0, 0, 0.3) 20px)"
    : "transparent",
  padding: grid,
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});
