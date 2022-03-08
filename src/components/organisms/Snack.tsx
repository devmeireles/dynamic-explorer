import React, { Dispatch } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import { connect, ConnectedProps } from 'react-redux';

import { mapStateToProps } from '../../store';
import { hideSnack } from '../../store/actions/snack';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  _hideSnack: () => dispatch(hideSnack()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Snack: React.FC<Props> = ({ _hideSnack, snack }) => {
  return (
    <Snackbar
      open={!!snack?.title}
      autoHideDuration={6000}
      onClose={() => _hideSnack()}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        onClose={() => _hideSnack()}
        severity={(snack?.type as AlertColor) || ('error' as AlertColor)}
      >
        {snack?.title}
      </Alert>
    </Snackbar>
  );
};

export default connector(Snack);
