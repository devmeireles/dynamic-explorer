import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';

import TabLabel from 'components/atoms/TabLabel';
import { AddOutlined } from '@mui/icons-material';
import { mapStateToProps } from '../../store';
import { Tab as TTab } from '../../store/types/Connection';
import ConnectionTabContent from './ConnectionTabContent';
import { addTab, removeTab } from '../../store/actions/connection';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  _addTab: () => dispatch(addTab()),
  _removeTab: (prop: number) => dispatch(removeTab(prop)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const BasicTabs: React.FC<Props> = ({ connection, _addTab, _removeTab }) => {
  const [value, setValue] = React.useState(0);
  const { tabs } = connection?.currentConnection || [];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNewTab = () => _addTab();

  const handleCloseTab = (tabPosition: number) => _removeTab(tabPosition);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {tabs.length > 0 &&
            tabs.map((tab: TTab) => (
              <Tab
                key={tab.id}
                label={
                  <TabLabel
                    key={value}
                    tabPostion={value}
                    type="REMOVE"
                    closeAction={() => _removeTab(value)}
                    title={tab.name}
                  />
                }
              />
            ))}

          <IconButton
            sx={{ ml: 'auto' }}
            aria-label="delete"
            onClick={() => handleNewTab()}
          >
            <AddOutlined />
          </IconButton>
        </Tabs>
      </Box>

      {tabs.length > 0 &&
        tabs.map((_tab: TTab, index: number) => (
          <TabPanel value={value} index={index}>
            <ConnectionTabContent />
          </TabPanel>
        ))}
    </Box>
  );
};

export default connector(BasicTabs);
