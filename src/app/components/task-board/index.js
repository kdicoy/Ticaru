import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Heading } from 'grommet';
import {
  getWeeklyBoardState,
  getGoalsColorState,
} from '../../../modules/selectors';
import {
  reorderTasksInADay,
  moveTaskToAnotherDay,
  resolveTask,
} from '../../../modules/actions/tasks';
import { openModalAndUpdateConents } from '../../../modules/actions/modal';
import {
  reorder,
  move,
  getTaskStyle,
  getTaskListStyle,
} from '../../helpers/drag-helpers';
import TaskComponent from './task-component';

export class TaskBoard extends Component {
  constructor() {
    super();

    this.id2List = {
      Monday: 'Monday',
      Tuesday: 'Tuesday',
      Wednesday: 'Wednesday',
      Thursday: 'Thursday',
      Friday: 'Friday',
      Saturday: 'Saturday',
      Sunday: 'Sunday',
    };
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */

  getList = id => {
    const { weeklyBoard } = this.props;
    return weeklyBoard[this.id2List[id]];
  };

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

      result[destination.droppableId][destination.index].day =
        destination.droppableId;

      moveTaskToAnotherDay(result);
    }
  };

  resolveTask = (id, day) => event => {
    const { resolveTask } = this.props;
    event.preventDefault();
    event.stopPropagation();
    resolveTask(id, day);
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
              <Heading margin="xsmall">{day}</Heading>

              {weeklyBoard[day].map((item, index) => (
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
              ))}

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
          <React.Fragment>
            {Object.keys(this.id2List).map(day =>
              this.renderDailyTaskColumn(day)
            )}
          </React.Fragment>
        </DragDropContext>
      </React.Fragment>
    );
  }
}

TaskBoard.propTypes = {
  weeklyBoard: PropTypes.shape({}).isRequired,
  goalColors: PropTypes.shape({}).isRequired,
  reorderTasksInADay: PropTypes.func.isRequired,
  moveTaskToAnotherDay: PropTypes.func.isRequired,
  resolveTask: PropTypes.func.isRequired,
  openModalAndUpdateConents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  weeklyBoard: getWeeklyBoardState(state),
  goalsColors: getGoalsColorState(state),
});

const mapDispatchToProps = {
  reorderTasksInADay,
  moveTaskToAnotherDay,
  resolveTask,
  openModalAndUpdateConents,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBoard);
