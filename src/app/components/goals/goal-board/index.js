import React, { PureComponent } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { getGoalsState } from '../../../../modules/selectors';
import PropTypes from 'prop-types';
import { moveGoal, resolveGoal } from '../../../../modules/actions/goals';
import {
  reorder,
  getGoalStyle,
  getGoalListStyle,
} from '../../../helpers/drag-helpers';
import GoalCard from '../goal-card';

class GoalBoard extends PureComponent {
  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const goalsList = reorder(
      this.props.goalsList,
      result.source.index,
      result.destination.index
    );
    moveGoal(goalsList);
  };
  resolveGoal = id => e => {
    e.preventDefault();
    console.log('ID', id);
    this.props.resolveGoal(id);
  };
  render() {
    const { goalsList } = this.props;
    console.log(goalsList, 'goalsLIST');
    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="goals">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getGoalListStyle(snapshot.isDraggingOver)}
              >
                {goalsList.map((goal, index) => (
                  <Draggable key={goal.id} draggableId={goal.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getGoalStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <GoalCard goal={goal} resolveGoal={this.resolveGoal} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </React.Fragment>
    );
  }
}

GoalBoard.propTypes = {
  goalsList: PropTypes.array.isRequired,
  moveGoal: PropTypes.func.isRequired,
  resolveGoal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    goalsList: getGoalsState(state),
  };
};

const mapDispatchToProps = { moveGoal, resolveGoal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalBoard);
