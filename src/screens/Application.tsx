import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import QueryForm from '../components/organisms/QueryForm';
import { mapStateToProps } from '../store';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Application: React.FC<Props> = ({ connection }) => {
  return <div>{connection.currentConnection && <QueryForm />}</div>;
};

export default connector(Application);
