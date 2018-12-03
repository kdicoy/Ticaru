import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'grommet';
import { Action, withStatechart } from 'react-automata';

import { addGoal } from '../../../../modules/actions/goals';
import { getGoalsColorsState } from '../../../../modules/selectors';
import ResponseInput from './ResponseInput';
import * as constants from '../../../constants/progress-constants';

const questionTextState = {
  [constants.GOAL_QUESTION]: 'What is your goal?',
  [constants.GOAL_DURATION]:
    'When do you want to complete it by? (Select closest duration)',
  [constants.TWO_YEAR]: 'What does two years of progress look like?',
  [constants.ONE_YEAR]: 'What does one year of progress look like?',
  [constants.SIX_MONTH]: 'What does six months of progress look like?',
  [constants.THREE_MONTH]: 'What does three months of progress look like?',
  [constants.ONE_MONTH]: 'What does one month of progress look like?',
  [constants.ONE_WEEK]: 'What does one week of progress look like?',
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
      onEntry: constants.TWO_YEAR_PROGRESS,
      on: { NEXT_QUESTION: constants.ONE_YEAR },
    },
    [constants.SIX_MONTH]: {
      onEntry: constants.SIX_MONTH,
      on: { NEXT_QUESTION: constants.SIX_MONTH },
    },
    [constants.THREE_MONTH]: {
      onEntry: constants.THREE_MONTH,
      on: { NEXT_QUESTION: constants.THREE_MONTH },
    },
    [constants.ONE_MONTH]: {
      onEntry: constants.ONE_MONTH,
      on: { NEXT_QUESTION: constants.ONE_MONTH },
    },
    [constants.ONE_WEEK]: {
      onEntry: constants.ONE_WEEK,
      on: { NEXT_QUESTION: constants.ONE_WEEK },
    },
  },
};

class AddGoalForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      goalProperties: {},
    };
  }

  addAndCloseModal = () => {
    const { addGoal, closeModalAndClearConents } = this.props;
    const { questionCount, ...rest } = this.state;
    addGoal(rest);
    closeModalAndClearConents();
  };

  render() {
    const { currentStep } = this.state;
    const { machineState } = this.props;
    return (
      <form
        style={{
          padding: '40px',
          overflowY: 'scroll',
          height: '100%',
        }}
      >
        <ResponseInput
          questionText={questionTextState[machineState]}
          currentStep={currentStep}
          expectedStep={0}
          value
        />
        <QuestionStep
          questionText="When do you want to accomplish it by?"
          currentStep={currentStep}
          expectedStep={1}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={this.prevStep} label="Previous" />
          <Button onClick={this.nextStep} label="Next" />
        </div>
      </form>
    );
  }
}

AddGoalForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
  closeModalAndClearConents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  goalsColors: getGoalsColorsState(state),
});

const mapDispatchToProps = { addGoal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGoalForm);
