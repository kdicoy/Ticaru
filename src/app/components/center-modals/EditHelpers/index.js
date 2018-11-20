const editableProperties = {
  task: true,
  time: true,
  time_duration: true,
  time_units: true,
  difficulty: true,
  points: false,
  day: true,
  goalId: false
};

export const createEditableTaskObject = obj => {
  const editableTaskObject = {};
  Object.keys(obj).forEach(property => {
    if (editableProperties[property]) {
      editableTaskObject[property] = obj[property];
    }
  });
  return editableTaskObject;
};
