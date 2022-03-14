import { Grid, IconButton, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

type Props = {
  title: string | number;
};

const TabLabel: React.FC<Props> = ({ title }) => {
  return (
    <Grid display="flex" flexDirection="row" alignItems="center">
      <Typography textTransform="none" fontWeight="bold" fontSize={15}>{title}</Typography>
      <IconButton aria-label="delete" onClick={() => {}}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  );
};

export default TabLabel;
