export type Connection = {
  connectionName?: string;
  connectionDescription?: string;
  connectionAccessKey?: string;
  connectionSecretAccessKey?: string;
};

export type InitialConnectionState = {
  currentList: Connection[];
  currentConnection: Connection | undefined;
};

export interface ConnectionStateMap {
  connection: InitialConnectionState;
}
