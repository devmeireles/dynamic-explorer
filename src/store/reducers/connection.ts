import { ConnectionActionTypes } from '../actions/connection';
import { Connection, InitialConnectionState } from '../types/Connection';

const initialConnectionState: InitialConnectionState = {
  currentList: [],
  currentConnection: undefined,
};

// eslint-disable-next-line import/prefer-default-export
export const connectionReducer = (
  state = initialConnectionState,
  action: { type: unknown; payload: Connection }
) => {
  switch (action.type) {
    case ConnectionActionTypes.SAVE_CONNECTION: {
      return {
        ...state,
        currentList: [...state.currentList, action.payload],
      };
    }
    case ConnectionActionTypes.OPEN_CONNECTION: {
      return {
        ...state,
        currentConnection: action.payload,
      };
    }
    default:
      return state;
  }
};
