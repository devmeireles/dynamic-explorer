import React from 'react';
import { CloseOutlined } from '@mui/icons-material';
import { Grid, TextField, IconButton, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IQueryParamRow } from '../../types/QueryParamRow';

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    padding: theme.spacing(1, 1),
  },

  formControlCheckBox: {
    padding: theme.spacing(0, 1),
  },
}));

type Props = {
  inputList: IQueryParamRow[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    i: number
  ) => void;
  handleRemoveClick: (i: number) => void;
};

const QueryParamRow: React.FC<Props> = ({
  inputList,
  handleInputChange,
  handleRemoveClick,
}) => {
  const classes = useStyles();

  return (
    <>
      {inputList &&
        inputList.length > 0 &&
        inputList.map((item: IQueryParamRow, index) => {
          return (
            <Grid
              className={classes.formControl}
              display="flex"
              justifyContent="space-between"
            >
              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                sx={{ mr: 2 }}
                name="attributeName"
                value={item.attributeName}
                onChange={(e) => handleInputChange(e, index)}
                label="Attribute Name"
              />

              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                sx={{ mx: 2 }}
                name="attributetype"
                value={item.attributetype}
                onChange={(e) => handleInputChange(e, index)}
                label="Type"
              />

              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                sx={{ mx: 2 }}
                name="condition"
                value={item.condition}
                onChange={(e) => handleInputChange(e, index)}
                label="Condition"
              />

              <TextField
                variant="outlined"
                required
                size="small"
                fullWidth
                sx={{ mx: 2 }}
                name="attributeValue"
                value={item.attributeValue}
                onChange={(e) => handleInputChange(e, index)}
                label="Value"
              />

              {inputList.length !== 1 && (
                <IconButton
                  aria-label="delete"
                  onClick={(): void => handleRemoveClick(index)}
                >
                  <CloseOutlined />
                </IconButton>
              )}
            </Grid>
          );
        })}
    </>
  );
};

export default QueryParamRow;
