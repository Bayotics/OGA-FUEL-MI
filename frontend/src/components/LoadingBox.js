import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingBox() {
  return (
    <Box sx={{ display: 'flex', height: '300px' , width: '300px', margin: 'auto' }}>
      <CircularProgress style= {{height: '100px', width: '100px'}}/>
    </Box>
  );
}