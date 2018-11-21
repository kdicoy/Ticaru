import * as errors from "./errors";

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
/*
validationObject = {
  task: value => value.length > 0,
  time: value => //moment is valid,
  time_duration: // is number,
  time_units: // is valid unit
  difficulty: // is number drop down,
  day: true, //drop down
};*/

export const defaultValidation = (value, key) => {};

export const taskValidation = (value, key) => {
  switch (key) {
    case "task":
      return value.length > 0 ? "" : errors.inputRequired;
  }
  return validate[key](value);
};
