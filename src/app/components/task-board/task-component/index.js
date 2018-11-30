import React from 'react';
import PropTypes from 'prop-types';

const TaskComponent = ({
  item,
  resolveTask,
  goalColors,
  openModalAndUpdateConents,
}) => {
  const { task, time, time_duration, time_units, difficulty, points } = item;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: '5px',
        ...goalColors,
      }}
    >
      <button onClick={() => openModalAndUpdateConents(item, 'task')}>
        (Edit)
      </button>
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
        <div>
          {time_duration} {time_units}
        </div>
        <div>
          {difficulty}
          /8
        </div>
        <div>{points} points </div>
        <button className="resolve-circle-button" onClick={resolveTask(item)}>
          <i className="ion-ios-arrow-down" />
        </button>
      </div>
    </div>
  );
};

TaskComponent.propTypes = {
  item: PropTypes.shape({}).isRequired,
  resolveTask: PropTypes.func.isRequired,
  goalColors: PropTypes.shape({}).isRequired,
  openModalAndUpdateConents: PropTypes.func.isRequired,
};

export default TaskComponent;
