import * as types from '../actionTypes/modal';

export const openModalAndUpdateConents = (
  modalContent,
  modalContentType
) => dispatch => {
  return dispatch({
    type: types.OPEN_MODAL_UPDATE_CONTENT,
    modalContent,
    modalContentType,
  });
};

export const closeModalAndClearConents = () => dispatch => {
  dispatch({ type: types.CLOSE_MODAL_CLEAR_CONTENT });
};
