import React, { Dispatch } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { connect, ConnectedProps } from 'react-redux';

import { mapStateToProps } from '../../store';
import { hideModal, showModal } from '../../store/actions/modal';
import { InitialModalState } from '../../store/types/Modal';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  _hideModal: () => dispatch(hideModal()),
  _showModal: (props: InitialModalState) => dispatch(showModal(props)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDialogue: React.FC<Props> = ({ _hideModal, modal }) => {
  const handleClose = (): void => {
    hideModal();
  };

  const handleCancel = (): void => {
    _hideModal();
  };

  return (
    <Dialog
      open={!!modal.title}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={modal.width}
      TransitionComponent={Transition}
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">
        <Typography>{modal.title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {modal.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default connector(ModalDialogue);
