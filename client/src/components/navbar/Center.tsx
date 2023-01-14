import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Center = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <Typography sx={{ flex: 1, fontWeight: 'bold', fontSize: '2rem' }}>
        G&V.
      </Typography>
    </Link>
  );
};
export default Center;
