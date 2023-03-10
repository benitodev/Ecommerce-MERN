import { Control, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface Props {
  name: string;
  label: string;
  control: any;
  dataTest?: string;
}

const FormInputText = ({ name, label, control, dataTest }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          data-cy={dataTest}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          multiline={true}
          onChange={onChange}
          value={value}
          label={label}
          sx={{ minWidth: '190px', width: '250px' }}
          variant="outlined"
        />
      )}
    />
  );
};
export default FormInputText;
