import { Dispatch } from 'redux';
import { Connection } from '../types/Connection';

export enum ConnectionActionTypes {
  SAVE_CONNECTION = 'SAVE_CONNECTION',
}

export const saveConnection = (payload: Connection) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ConnectionActionTypes.SAVE_CONNECTION,
      payload,
    });
  };
};
