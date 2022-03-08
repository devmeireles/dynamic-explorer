export type InitialSnackState = {
  title?: string;
  type?: string;
};

export interface SnackStateMap {
  snack: InitialSnackState;
}
