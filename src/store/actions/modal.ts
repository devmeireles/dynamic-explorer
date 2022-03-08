import { Dispatch } from 'redux';
import { InitialModalState } from '../types/Modal';

export enum ModalActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL',
}

export const showModal = (payload: InitialModalState) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ModalActionTypes.SHOW_MODAL,
      payload: { ...payload },
    });
  };
};

export const hideModal = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ModalActionTypes.HIDE_MODAL,
    });
  };
};
