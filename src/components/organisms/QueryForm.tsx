import React, { Dispatch } from 'react';
import { Box, Button, Grid, TextField, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AddOutlined } from '@mui/icons-material';
import { connect, ConnectedProps } from 'react-redux';

import { saveConnection } from 'store/actions/connection';
import { mapStateToProps } from '../../store';
import { Connection } from '../../store/types/Connection';
import { showSnack } from '../../store/actions/snack';
import { InitialSnackState } from '../../store/types/Snack';
import { hideModal } from '../../store/actions/modal';
import Loading from '../atoms/Loading';
import QueryParamRow from '../molecules/QueryParamRow';
import { IQueryParamRow } from '../../types/QueryParamRow';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  _showSnack: (props: InitialSnackState) => dispatch(showSnack(props)),
  _hideModal: () => dispatch(hideModal()),
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

const QueryForm: React.FC<Props> = ({ _showSnack }) => {
  const classes = useStyles();

  const [tableName, setTableName] = React.useState<string>('');

  const [inputList, setInputList] = React.useState<IQueryParamRow[]>([
    {
      attributeName: '',
      attributeValue: '',
      attributetype: '',
      condition: '',
    },
  ]);

  const [loading, setLoading] = React.useState<boolean>(false);

  if (loading) return <Loading />;

  /**
   * Handles the input change setting the new value to inputList
   * @param e as an event object
   * @param index the item position
   */
  const handleInputChange = (
    e: { target: { name: string; value: string | number } },
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  /**
   * Handler the remove item click
   * @param index them item position
   */
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    _showSnack({
      title: 'Query parameter removed successfully',
      type: 'success',
    });
  };

  /**
   * Handles the add param action
   */
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        attributeName: '',
        attributeValue: '',
        attributetype: '',
        condition: '',
      },
    ]);
  };

  return (
    <>
      <Grid item xs={5} sm={5} className={classes.formControl}>
        <TextField
          variant="outlined"
          required
          fullWidth
          size="small"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          label="Table Name"
          autoFocus
        />
      </Grid>

      <Box sx={{ m: 1 }} />

      <QueryParamRow
        inputList={inputList}
        handleInputChange={handleInputChange}
        handleRemoveClick={handleRemoveClick}
      />

      <Box sx={{ mt: 5 }} />

      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

      <Grid item xs={5} sm={5} className={classes.formControl}>
        <Grid item xs={12} sm={12} className={classes.formControl}>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            startIcon={<AddOutlined />}
            onClick={() => handleAddClick()}
          >
            Param
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default connector(QueryForm);
