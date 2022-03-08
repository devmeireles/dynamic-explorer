import React, { Dispatch } from 'react';
import { Button, Grid, TextField, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { connect, ConnectedProps } from 'react-redux';

import { saveConnection } from 'store/actions/connection';
import { mapStateToProps } from '../../store';
import PaperCard from '../molecules/PaperCard';
import { Connection } from '../../store/types/Connection';

const mapDispatchToProps = (dispatch: Dispatch<unknown>) => ({
  _saveConnection: (props: Connection) => dispatch(saveConnection(props)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(4, 3),
    borderRadius: 10,
    '&:nth-of-type(even)': {
      margin: theme.spacing(3, 0),
    },
  },

  formControl: {
    padding: theme.spacing(1, 1),
  },

  formControlCheckBox: {
    padding: theme.spacing(0, 1),
  },

  cardTitle: {
    padding: theme.spacing(0, 1, 2, 1),
  },
}));

const ConnectionForm: React.FC<Props> = ({ _saveConnection }) => {
  const classes = useStyles();

  const [connectionName, setConnectionName] = React.useState<string>('');
  const [connectionDescription, setConnectionDescription] =
    React.useState<string>('');

  const [connectionAccessKey, setConnectionAccessKey] =
    React.useState<string>('');

  const [connectionSecretAccessKey, setConnectionSecretAccessKey] =
    React.useState<string>('');

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    _saveConnection({
      connectionName,
      connectionDescription,
      connectionAccessKey,
      connectionSecretAccessKey,
    });

    setLoading(false);
  };

  return (
    <PaperCard>
      <Grid item xs={12} sm={12} className={classes.formControl}>
        <TextField
          variant="outlined"
          required
          fullWidth
          value={connectionName}
          onChange={(e) => setConnectionName(e.target.value)}
          label="Connection Name"
          autoFocus
        />
      </Grid>

      <Grid item xs={12} sm={12} className={classes.formControl}>
        <TextField
          variant="outlined"
          required
          fullWidth
          value={connectionAccessKey}
          onChange={(e) => setConnectionAccessKey(e.target.value)}
          label="Access Key ID"
          autoFocus
        />
      </Grid>

      <Grid item xs={12} sm={12} className={classes.formControl}>
        <TextField
          variant="outlined"
          required
          fullWidth
          value={connectionSecretAccessKey}
          onChange={(e) => setConnectionSecretAccessKey(e.target.value)}
          label="AWS Secret Access Key"
          autoFocus
        />
      </Grid>

      <Grid item xs={12} sm={12} className={classes.formControl}>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Description"
          value={connectionDescription}
          onChange={(e) => setConnectionDescription(e.target.value)}
          multiline
          rows={8}
        />
      </Grid>

      <Grid item xs={12} sm={12} className={classes.formControl}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleSave()}
        >
          Save
        </Button>
      </Grid>
    </PaperCard>
  );
};

export default connector(ConnectionForm);