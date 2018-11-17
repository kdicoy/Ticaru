import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Heading } from "grommet";
import { connect } from "react-redux";
import {
  getWeeklyBoardState,
  getGoalsColorState
} from "../../../modules/selectors";
import PropTypes from "prop-types";
import { moveWeeklyTasks, resolveTask } from "../../../modules/actions/tasks";
import {
  reorder,
  move,
  getTaskStyle,
  getTaskListStyle
} from "../../helpers/drag-helpers";
import TaskComponent from "./task-component";

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

  resolveTask = (id, day) => {
    this.props.resolveTask(id, day);
  };

  renderDailyTaskColumn = day => {
    const { weeklyBoard, goalsColors } = this.props;
    console.log(goalsColors, "goals Colors");
    return (
      <React.Fragment key={day}>
        <Heading style={{ lineHeight: 0 }}>{day}</Heading>
        <Droppable droppableId={day}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getTaskListStyle(snapshot.isDraggingOver)}
            >
              {weeklyBoard[day].map((item, index) => {
                return (
                  <Draggable
                    key={item.task + index + day}
                    draggableId={item.task + index + day}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getTaskStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <TaskComponent
                          item={item}
                          resolveTask={this.resolveTask}
                          day={day}
                          goalColors={goalsColors[item.goalId]}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}

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
    weeklyBoard: getWeeklyBoardState(state),
    goalsColors: getGoalsColorState(state)
  };
};

const mapDispatchToProps = { moveWeeklyTasks, resolveTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
