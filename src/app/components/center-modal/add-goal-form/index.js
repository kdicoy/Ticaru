import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'grommet';
import { Action, withStateMachine } from 'react-automata';

import { addGoal } from '../../../../modules/actions/goals';
import { getGoalsColorsState } from '../../../../modules/selectors';
import ResponseInput from './ResponseInput';
import * as constants from '../../../constants/progress-constants';

const questionTextState = {
  [constants.DISPLAY_GOAL_QUESTION]: 'What is your goal?',
  [constants.DISPLAY_DURATION_QUESTION]:
    'When do you want to complete it by? (Select closest duration)',
  [constants.DISPLAY_TWO_YEAR_QUESTION]:
    'What does two years of progress look like?',
  [constants.DISPLAY_ONE_YEAR_QUESTION]:
    'What does one year of progress look like?',
  [constants.DISPLAY_SIX_MONTH_QUESTION]:
    'What does six months of progress look like?',
  [constants.DISPLAY_THREE_MONTH_QUESTION]:
    'What does three months of progress look like?',
  [constants.DISPLAY_ONE_MONTH_QUESTION]:
    'What does one month of progress look like?',
  [constants.DISPLAY_ONE_WEEK_QUESTION]:
    'What does one week of progress look like?',
};
const questionStateChart = {
  id: 'question',
  initial: constants.GOAL_QUESTION,
  states: {
    [constants.GOAL_QUESTION]: {
      onEntry: constants.DISPLAY_GOAL_QUESTION,
      on: { NEXT_QUESTION: constants.DURATION_QUESTION },
    },
    [constants.DURATION_QUESTION]: {
      onEntry: constants.DISPLAY_DURATION_QUESTION,
      on: {
        TWO_YEAR: constants.ONE_YEAR,
        ONE_YEAR: constants.SIX_MONTH,
        SIX_MONTH: constants.THREE_MONTH,
        THREE_MONTH: constants.ONE_MONTH,
        ONE_MONTH: constants.ONE_WEEK,
      },
    },
    [constants.ONE_YEAR]: {
      onEntry: constants.DISPLAY_TWO_YEAR_QUESTION,
      on: { NEXT_QUESTION: constants.SIX_MONTH },
    },
    [constants.SIX_MONTH]: {
      onEntry: constants.DISPLAY_SIX_MONTH_QUESTION,
      on: { NEXT_QUESTION: constants.THREE_MONTH },
    },
    [constants.THREE_MONTH]: {
      onEntry: constants.DISPLAY_THREE_MONTH_QUESTION,
      on: { NEXT_QUESTION: constants.ONE_MONTH },
    },
    [constants.ONE_MONTH]: {
      onEntry: constants.DISPLAY_ONE_MONTH_QUESTION,
      on: { NEXT_QUESTION: constants.ONE_WEEK },
    },
    [constants.ONE_WEEK]: {
      onEntry: constants.DISPLAY_ONE_WEEK_QUESTION,
      on: { NEXT_QUESTION: constants.DOES_THIS_LOOK_RIGHT },
    },
    [constants.DOES_THIS_LOOK_RIGHT]: {
      onEntry: constants.DISPLAY_FINAL_OUTLOOK,
      type: 'final',
    },
  },
};

class AddGoalForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      goalProperties: {},
      currentInput: '',
    };
  }

  addAndCloseModal = () => {
    const { addGoal, closeModalAndClearConents } = this.props;
    const { goalProperties } = this.state;
    addGoal(goalProperties);
    closeModalAndClearConents();
  };

  nextStep = e => {
    e.preventDefault();
    const { transition } = this.props;
    transition('NEXT_QUESTION');
  };

  handleCurrentInputChange = event => {
    this.setState({ currentInput: event.target.value });
  };

  render() {
    const { currentInput } = this.state;
    return (
      <form
        style={{
          padding: '40px',
          overflowY: 'scroll',
          height: '100%',
        }}
      >
        {Object.keys(questionTextState).map(questionKey => (
          <Action is={questionKey} key={questionKey}>
            <ResponseInput
              questionText={questionTextState[questionKey]}
              currentInput={currentInput}
              handleCurrentInputChange={this.handleCurrentInputChange}
            />
            <Button onClick={this.nextStep} label="Next" />
          </Action>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={this.prevStep} label="Previous" />
        </div>
      </form>
    );
  }
}

AddGoalForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
  closeModalAndClearConents: PropTypes.func.isRequired,
  transition: PropTypes.func.isRequired,
  goalsColors: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  goalsColors: getGoalsColorsState(state),
});

const mapDispatchToProps = { addGoal };

const StateMachineAddGoalForm = withStateMachine(questionStateChart)(
  AddGoalForm
);

const ConnectedAddGoalForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StateMachineAddGoalForm);

export default ConnectedAddGoalForm;
