import { IQueryParamRow } from '../../types/QueryParamRow';

export type Tab = {
  id: string;
  name: string | number;
  queryParams?: IQueryParamRow[];
};

export type Connection = {
  id: string;
  connectionName?: string;
  connectionDescription?: string;
  connectionAccessKey?: string;
  connectionSecretAccessKey?: string;
  tabs?: Tab[];
};

export type InitialConnectionState = {
  currentList: Connection[];
  currentConnection: Connection | undefined;
};

export interface ConnectionStateMap {
  connection: InitialConnectionState;
}
