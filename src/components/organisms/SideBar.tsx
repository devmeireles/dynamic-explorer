import React, { Dispatch } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddOutlined, StorageOutlined } from '@mui/icons-material';
import { connect, ConnectedProps } from 'react-redux';

import { mapStateToProps } from '../../store';
import { showModal } from '../../store/actions/modal';
import ConnectionForm from './ConnectionForm';
import { Connection } from '../../store/types/Connection';
import { openConnection } from '../../store/actions/connection';
import { InitialModalState } from '../../store/types/Modal';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  _openModal: (props: InitialModalState) => dispatch(showModal(props)),
  _openConnection: (props: Connection) => dispatch(openConnection(props)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Sidebar: React.FC<Props> = ({
  _openModal,
  connection,
  _openConnection,
}) => {
  return (
    <>
      <ListItemButton
        onClick={() =>
          _openModal({
            title: 'Creating new database connection',
            content: <ConnectionForm />,
            width: 'sm',
            callBack: () => {},
            onAgree: () => {},
          })
        }
      >
        <ListItemIcon>
          <AddOutlined />
        </ListItemIcon>
        <ListItemText primary="New Connection" />
      </ListItemButton>

      {connection.currentList &&
        connection.currentList.length > 0 &&
        connection.currentList.map((item: Connection) => {
          return (
            <ListItemButton
              key={item.connectionAccessKey}
              onClick={() => _openConnection(item)}
              selected={
                item.connectionAccessKey ===
                connection.currentConnection?.connectionAccessKey
              }
            >
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
