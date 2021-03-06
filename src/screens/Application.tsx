import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { default as Tabs } from '../components/organisms/Tabs';

import { mapStateToProps } from '../store';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Application: React.FC<Props> = ({ connection }) => {
  return <div>{connection.currentConnection && <Tabs />}</div>;
};

export default connector(Application);
