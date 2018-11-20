import React from "react";
import { shallow } from "enzyme";
import { TaskBoard } from "../index";

const initialState = {
  weeklyBoard: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }
};
describe("WeeklyBoard", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TaskBoard debug {...initialState} />);

    expect(component).toMatchSnapshot();
  });
});
