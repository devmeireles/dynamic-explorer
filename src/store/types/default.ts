import { InitialConnectionState } from './Connection';
import { InitialModalState } from './Modal';
import { InitialSnackState } from './Snack';

export interface IRootState {
  snack: InitialSnackState;
  modal: InitialModalState;
  connection: InitialConnectionState;
}

export type AppType = {
  snack: InitialSnackState;
  modal: InitialModalState;
  connection: InitialConnectionState;
};
