import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
        <p>Skeleton Componenti</p>
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
    </div>
  );
}