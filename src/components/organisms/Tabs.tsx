import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Box, Tab, Tabs, Typography } from '@mui/material';

import TabLabel from 'components/atoms/TabLabel';
import { mapStateToProps } from '../../store';
import { Tab as TTab } from '../../store/types/Connection';
import ConnectionTabContent from './ConnectionTabContent';

const mapDispatchToProps = (_dispatch: Dispatch<any>) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

interface TabPanelProps {
  children?: React.ReactNode;
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

const BasicTabs: React.FC<Props> = ({ connection }) => {
  const [value, setValue] = React.useState(0);
  const { tabs } = connection?.currentConnection || [];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {tabs.length > 0 &&
            tabs.map((tab: TTab) => (
              <Tab label={<TabLabel title={tab.name} />} />
            ))}
        </Tabs>
      </Box>

      {tabs.length > 0 &&
        tabs.map((tab: TTab, index: number) => (
          <TabPanel value={value} index={index}>
            <ConnectionTabContent />
          </TabPanel>
        ))}
    </Box>
  );
};

export default connector(BasicTabs);
