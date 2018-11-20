import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import {
  getWeeklyBoardState,
  getGoalsColorState
} from "../../../modules/selectors";
import PropTypes from "prop-types";
import {
  reorderTasksInADay,
  moveTaskToAnotherDay,
  resolveTask
} from "../../../modules/actions/tasks";
import { openModalAndUpdateConents } from "../../../modules/actions/modal";
import {
  reorder,
  move,
  getTaskStyle,
  getTaskListStyle
} from "../../helpers/drag-helpers";
import TaskComponent from "./task-component";

export class TaskBoard extends Component {
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
    const { reorderTasksInADay, moveTaskToAnotherDay } = this.props;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      reorderTasksInADay(items, source.droppableId);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      result[destination.droppableId][destination.index]["day"] =
        destination.droppableId;

      moveTaskToAnotherDay(result);
    }
  };

  resolveTask = (id, day) => {
    this.props.resolveTask(id, day);
  };

  renderDailyTaskColumn = day => {
    const { weeklyBoard, goalsColors, openModalAndUpdateConents } = this.props;
    return (
      <React.Fragment key={day}>
        <Droppable droppableId={day}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getTaskListStyle(snapshot.isDraggingOver)}
            >
              <h2>{day}</h2>

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
                          goalColors={goalsColors[item.goalId]}
                          openModalAndUpdateConents={openModalAndUpdateConents}
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
  render() {
    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div style={{ padding: 20 }}>
            {Object.keys(this.id2List).map(day =>
              this.renderDailyTaskColumn(day)
            )}
          </div>
        </DragDropContext>
      </React.Fragment>
    );
  }
}

TaskBoard.propTypes = {
  weeklyBoard: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    weeklyBoard: getWeeklyBoardState(state),
    goalsColors: getGoalsColorState(state)
  };
};

const mapDispatchToProps = {
  reorderTasksInADay,
  moveTaskToAnotherDay,
  resolveTask,
  openModalAndUpdateConents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
