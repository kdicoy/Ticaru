import React, { PureComponent } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { getGoalsState } from '../../../../modules/selectors';
import { moveGoal, resolveGoal } from '../../../../modules/actions/goals';
import { openModalAndUpdateContents } from '../../../../modules/actions/modal';
import {
  reorder,
  getGoalStyle,
  getGoalListStyle,
} from '../../../helpers/drag-helpers';

import GoalCard from '../goal-card';
import { ADD_GOAL } from '../../../constants/modal-constants';

class GoalBoard extends PureComponent {
  onDragEnd = result => {
    const { goalsList } = this.props;
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const goalsListReordered = reorder(
      goalsList,
      result.source.index,
      result.destination.index
    );
    moveGoal(goalsListReordered);
  };

  resolveGoal = id => e => {
    e.preventDefault();
    const { resolveGoal } = this.props;

    resolveGoal(id);
  };

  createGoalWithProperties = e => {
    e.preventDefault();
    const { openModalAndUpdateContents } = this.props;
    openModalAndUpdateContents({}, ADD_GOAL);
  };

  render() {
    const { goalsList } = this.props;
    return (
      <React.Fragment>
        <Button
          type="button"
          label="Add New Goal"
          onClick={this.createGoalWithProperties}
        />
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
  goalsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  moveGoal: PropTypes.func.isRequired,
  resolveGoal: PropTypes.func.isRequired,
  openModalAndUpdateContents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goalsList: getGoalsState(state),
});

const mapDispatchToProps = {
  moveGoal,
  resolveGoal,
  openModalAndUpdateContents,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalBoard);
