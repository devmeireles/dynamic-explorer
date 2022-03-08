import { ModalActionTypes } from '../actions/modal';
import { InitialModalState } from '../types/Modal';

const initialModalState: InitialModalState = {
  title: undefined,
  type: undefined,
  onAgree: () => {},
  callBack: () => {},
};

// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (
  state = initialModalState,
  action: { type: unknown; payload: unknown }
) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return { ...action.payload };
    case ModalActionTypes.HIDE_MODAL:
      return {
        snack: null,
      };
    default:
      return null;
  }

  return state;
};
