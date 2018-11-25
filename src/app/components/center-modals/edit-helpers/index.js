import moment from 'moment';
import * as validationTypes from './validation-types';

const notEditableDefaultTaskProperties = {
  id: true,
  task: false,
  time: false,
  time_duration: false,
  time_units: false,
  difficulty: false,
  points: true,
  day: false,
  goalId: true,
};

export const createEditableTaskObject = obj => {
  const editableTaskObject = {};
  Object.keys(obj).forEach(property => {
    if (!notEditableDefaultTaskProperties[property]) {
      editableTaskObject[property] = obj[property];
    }
  });
  return editableTaskObject;
};

export const createEditableGoalObject = obj => {
  const editableTaskObject = {};
  Object.keys(obj).forEach(property => {
    if (!notEditableDefaultTaskProperties[property]) {
      editableTaskObject[property] = obj[property];
    }
  });
  return editableTaskObject;
};

export const numberValidation = stringNumber => {
  if (stringNumber === ' ') return false;
  return !Number.isNaN(Number(stringNumber));
};

export const textValidation = text => typeof text === 'string';

export const pictureValidation = () => true;

export const timeValidation = time => moment(time).isValid();

export const timeUnitValidation = timeUnit =>
  ['days', 'hours', 'minutes'].includes(timeUnit);

export const baseInputCoersion = (value, type) => {
  switch (type) {
    case validationTypes.number:
      return numberValidation(value);
    case validationTypes.text:
      return textValidation(value);
    case validationTypes.image:
      return pictureValidation(value);
    case validationTypes.time:
      return timeValidation(value);
    case validationTypes.timeUnits:
      return timeUnitValidation(value);
    default:
      return false;
  }
};

const defaultTaskValidationProperties = {
  task: validationTypes.text,
  time: validationTypes.time,
  time_duration: validationTypes.number,
  time_units: validationTypes.timeUnits,
  difficulty: validationTypes.number,
  day: validationTypes.text,
};

export const defaultTaskInputCoersion = (value, key) =>
  baseInputCoersion(value, defaultTaskValidationProperties[key]);
