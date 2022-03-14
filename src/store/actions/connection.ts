import { Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';
import { Connection } from '../types/Connection';

export enum ConnectionActionTypes {
  SAVE_CONNECTION = 'SAVE_CONNECTION',
  OPEN_CONNECTION = 'OPEN_CONNECTION',
  ADD_TAB = 'ADD_TAB',
  REMOVE_TAB = 'REMOVE_TAB',
}

export const saveConnection = (payload: Connection) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ConnectionActionTypes.SAVE_CONNECTION,
      payload,
    });
  };
};

export const openConnection = (payload: Connection) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ConnectionActionTypes.OPEN_CONNECTION,
      payload,
    });
  };
};

export const addTab = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ConnectionActionTypes.ADD_TAB,
      payload: {
        id: uuid(),
        name: 'New Query',
      },
    });
  };
};

export const removeTab = (tabPosition: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ConnectionActionTypes.REMOVE_TAB,
      payload: tabPosition,
    });
  };
};
