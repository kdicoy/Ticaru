import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Heading } from "grommet";
import { connect } from "react-redux";
import { getWeeklyBoardState } from "../../../modules/selectors";
import PropTypes from "prop-types";
import { moveWeeklyTasks } from "../../../modules/actions/tasks";
import { reorder, move, getItemStyle, getListStyle } from "./drag-helpers";
// a little function to help us with reordering the result
class TaskBoard extends Component {
  constructor() {
    super();

    this.id2List = {
      monday: "monday",
      tuesday: "tuesday",
      wednesday: "wednesday",
      thursday: "thursday",
      friday: "friday",
      saturday: "saturday",
      sunday: "sunday"
    };
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */

  getList = id => this.props.weeklyBoard[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    const { moveWeeklyTasks } = this.props;
    console.log(source, "source", destination, "destination");
    // dropped outside the list
    if (!destination) {
      return;
    }
    const weeklyBoardEdits = {};

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      weeklyBoardEdits[source.droppableId] = items;
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      console.log(result, "result");
      weeklyBoardEdits[source.droppableId] = result[source.droppableId];
      weeklyBoardEdits[destination.droppableId] =
        result[destination.droppableId];
      console.log(weeklyBoardEdits, "weekly board Edits");
    }
    moveWeeklyTasks(weeklyBoardEdits);
  };

  renderDailyTaskColumn = day => {
    const { weeklyBoard } = this.props;

    return (
      <React.Fragment key={day}>
        <Heading style={{ lineHeight: 0 }}>{day}</Heading>
        <Droppable droppableId={day}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {weeklyBoard[day].map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </React.Fragment>
    );
  };
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {Object.keys(this.id2List).map(day =>
            this.renderDailyTaskColumn(day)
          )}
        </DragDropContext>
      </React.Fragment>
    );
  }
}

TaskBoard.propTypes = {
  weeklyBoard: PropTypes.object.isRequired,
  moveWeeklyTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    weeklyBoard: getWeeklyBoardState(state)
  };
};

const mapDispatchToProps = { moveWeeklyTasks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
