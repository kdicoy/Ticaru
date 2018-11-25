import React from 'react';
import { shallow } from 'enzyme';
import { TaskBoard } from '../index';

const initialState = {
  weeklyBoard: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
};
describe('WeeklyBoard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TaskBoard debug {...initialState} />);

    expect(component).toMatchSnapshot();
  });
});
