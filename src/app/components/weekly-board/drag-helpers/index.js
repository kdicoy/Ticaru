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

export const getItemStyle = (isDragging, draggableStyle) => ({
  height: "20px",
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",

  // change background colour if dragging
  background: isDragging ? "#6AFF5E" : "#6AFF5E",

  // styles we need to apply on draggables
  ...draggableStyle
});

export const getListStyle = isDraggingOver => ({
  background: isDraggingOver
    ? "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 10px, rgba(0, 0, 0, 0.3) 10px, rgba(0, 0, 0, 0.3) 20px)"
    : "white",
  padding: grid,
  width: "75%"
});
