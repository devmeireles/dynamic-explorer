import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { snackReducer } from './reducers/snack';
import { modalReducer } from './reducers/modal';
import { connectionReducer } from './reducers/connection';
import { AppType, IRootState } from './types/default';

const rootReducer = combineReducers({
  snack: snackReducer,
  modal: modalReducer,
  connection: connectionReducer,
});

export const mapStateToProps = (state: IRootState): AppType => ({
  snack: state.snack,
  modal: state.modal,
  connection: state.connection,
});

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger, thunk)
);
