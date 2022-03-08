import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

type Props = unknown;

const Loading: React.FC<Props> = (): JSX.Element => {
  return (
    <Grid
      display="flex"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      marginTop="200px"
      width="100%"
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
