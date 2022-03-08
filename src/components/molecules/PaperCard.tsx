import React from 'react';
import { Grid, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
  title?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(4, 3),
    borderRadius: 10,
    '&:nth-of-type(even)': {
      margin: theme.spacing(3, 0),
    },
  },

  cardTitle: {
    padding: theme.spacing(0, 1, 2, 1),
  },
}));

const PaperCard: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Grid component={Paper} className={classes.paper}>
      {title && (
        <Grid item xs={12} sm={12} className={classes.cardTitle}>
          <Typography
            fontWeight="bolder"
            variant="body1"
            textAlign="left"
            color="textPrimary"
          >
            {title}
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} sm={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PaperCard;
