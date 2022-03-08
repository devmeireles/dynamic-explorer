import React from 'react';

export type InitialModalState = {
  title?: string;
  content?: React.ReactNode;
  width: string;
  onAgree: () => void;
  callBack: () => void;
};

export interface ModalStateMap {
  snack: InitialModalState;
}
