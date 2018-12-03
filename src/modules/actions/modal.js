import * as types from '../actionTypes/modal';

export const openModalAndUpdateContents = (
  modalContent,
  modalContentType
) => dispatch =>
  dispatch({
    type: types.OPEN_MODAL_UPDATE_CONTENT,
    modalContent,
    modalContentType,
  });

export const closeModalAndClearConents = () => dispatch => {
  dispatch({ type: types.CLOSE_MODAL_CLEAR_CONTENT });
};
