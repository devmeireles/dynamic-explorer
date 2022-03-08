import { SnackActionTypes } from '../actions/snack';
import { InitialSnackState } from '../types/Snack';

const initialSnackState: InitialSnackState = {
  title: undefined,
  type: undefined,
};

// eslint-disable-next-line import/prefer-default-export
export const snackReducer = (
  state = initialSnackState,
  action: { type: unknown; payload: unknown }
) => {
  switch (action.type) {
    case SnackActionTypes.SHOW_SNACK:
      return { ...action.payload };
    case SnackActionTypes.HIDE_SNACK:
      return {
        snack: null,
      };
    default:
      return state;
  }
};
