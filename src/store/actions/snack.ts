import { Dispatch } from 'redux';
import { InitialSnackState } from '../types/Snack';

export enum SnackActionTypes {
  SHOW_SNACK = 'SHOW_SNACK',
  HIDE_SNACK = 'HIDE_SNACK',
}

export const showSnack = (payload: InitialSnackState) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SnackActionTypes.SHOW_SNACK,
      payload: { ...payload },
    });
  };
};

export const hideSnack = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SnackActionTypes.HIDE_SNACK,
    });
  };
};
