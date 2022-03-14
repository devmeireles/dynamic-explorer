import { Grid, IconButton, Typography } from '@mui/material';
import { CloseOutlined, AddOutlined } from '@mui/icons-material';

type Props = {
  title?: string | number;
  type: 'ADD' | 'REMOVE';
  closeAction?: () => void;
  tabPostion: string | number;
};

const TabLabel: React.FC<Props> = ({ title, type, closeAction }) => {
  return (
    <Grid display="flex" flexDirection="row" alignItems="center">
      <Typography textTransform="none" fontWeight="bold" fontSize={15}>{title}</Typography>
      <IconButton aria-label="delete" onClick={() => closeAction()}>
        {type === 'REMOVE' ? <CloseOutlined /> : <AddOutlined />}
      </IconButton>
    </Grid>
  );
};

export default TabLabel;
