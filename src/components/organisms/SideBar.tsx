import React, { Dispatch } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddOutlined, StorageOutlined } from '@mui/icons-material';
import { connect, ConnectedProps } from 'react-redux';

import { mapStateToProps } from '../../store';
import { showModal } from '../../store/actions/modal';
import ConnectionForm from './ConnectionForm';
import { Connection } from 'store/types/Connection';

const mapDispatchToProps = (dispatch: Dispatch<unknown>) => ({
  openModal: () =>
    dispatch(
      showModal({
        title: 'Creating new database connection',
        content: <ConnectionForm />,
        width: 'sm',
        callBack: () => {},
        onAgree: () => {},
      })
    ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Sidebar: React.FC<Props> = ({ openModal, connection }) => {
  // console.log('item', connection, connection.length);
  return (
    <>
      <ListItemButton onClick={() => openModal()}>
        <ListItemIcon>
          <AddOutlined />
        </ListItemIcon>
        <ListItemText primary="New Connection" />
      </ListItemButton>

      {connection.currentList &&
        connection.currentList.length > 0 &&
        connection.currentList.map((item: Connection) => {
          return (
            <ListItemButton onClick={() => openModal()}>
              <ListItemIcon>
                <StorageOutlined />
              </ListItemIcon>
              <ListItemText primary={item.connectionName} />
            </ListItemButton>
          );
        })}
    </>
  );
};

export default connector(Sidebar);
