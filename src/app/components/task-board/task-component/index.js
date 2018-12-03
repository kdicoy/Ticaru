import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SuccessIcon, EditIcon } from '../../../assets/icons';

const UnstyledButton = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  outline: none;
`;

const TaskComponent = ({ item, resolveTask, goalColor, openEditTaskModal }) => {
  const { task, time, timeDuration, timeUnits, difficulty, points } = item;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: '5px',
        ...goalColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <UnstyledButton type="button" onClick={openEditTaskModal}>
          <EditIcon width={24} height={24} />
        </UnstyledButton>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <div>{task}</div>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <div>{time}</div>
        <div>{`${timeDuration} ${timeUnits}`}</div>
        <div>
          {difficulty}
          /8
        </div>
        <div>{`${points} points`}</div>
        <UnstyledButton type="button" onClick={resolveTask(item)}>
          <SuccessIcon width={24} height={24} />
        </UnstyledButton>
      </div>
    </div>
  );
};

TaskComponent.propTypes = {
  item: PropTypes.shape({}).isRequired,
  resolveTask: PropTypes.func.isRequired,
  goalColor: PropTypes.shape({}).isRequired,
  openEditTaskModal: PropTypes.func.isRequired,
};

export default TaskComponent;
