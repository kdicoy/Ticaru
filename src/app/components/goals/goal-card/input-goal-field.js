import React, { PureComponent } from "react";
import { TextInput } from "grommet";
import styled from "styled-components";

const BorderedDiv = styled.div`
  box-sizing: border-box;
  font-size: inherit;
  border: none;
  -webkit-appearance: none;
  padding: 5px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  color: inherit;
  margin-left: 5px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 4px;
  width: 100%;
`;

const FlexVertCentered = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

class InputGoalField extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      goalText: this.props.goalInitialInput
    };
  }
  handleGoalTextChange = event => {
    this.setState({ goalText: event.target.value });
  };
  render() {
    const { goalType, timeToUpdate } = this.props;
    return (
      <FlexVertCentered>
        {goalType}:
        {timeToUpdate ? (
          <TextInput
            style={{ padding: "5px", width: "auto", fontWeight: 400 }}
            value={this.state.goalText}
            onChange={this.handleGoalTextChange}
          />
        ) : (
          <BorderedDiv>{this.state.goalText}</BorderedDiv>
        )}
      </FlexVertCentered>
    );
  }
}

export default InputGoalField;
