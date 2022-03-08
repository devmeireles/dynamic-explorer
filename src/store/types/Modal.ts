import React from 'react';
import { Breakpoint } from '@mui/material/styles';

export type InitialModalState = {
  title?: string;
  content?: React.ReactNode;
  width: Breakpoint;
  onAgree: () => void;
  callBack: () => void;
};

export interface ModalStateMap {
  snack: InitialModalState;
}
