import * as types from "../actionTypes/modal";

const initialState = {
  modalContent: {},
  modalContentType: "",
  modalIsOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL_UPDATE_CONTENT:
      return {
        ...state,
        modalContent: action.modalContent,
        modalContentType: action.modalContentType,
        modalIsOpen: true
      };
    case types.CLOSE_MODAL_CLEAR_CONTENT:
      return {
        ...state,
        contents: {},
        contentType: "",
        modalIsOpen: false
      };
    default:
      return state;
  }
};

/*
      modalIsOpen,
      modalContentType,
*/
