import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { LanguageButtonStyle } from './styles';
import SearchIcon from '@mui/icons-material/Search';

const Left = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button variant="text" sx={LanguageButtonStyle}>
        EN
      </Button>

      <FormControl variant="outlined">
        <OutlinedInput
          sx={{ height: '40px' }}
          endAdornment={<SearchIcon sx={{ color: 'gray' }} />}
        />
      </FormControl>
    </Box>
  );
};
export default Left;
