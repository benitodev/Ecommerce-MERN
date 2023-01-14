import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { OptionActions } from '../../reducers/OptionsReducer';

interface Props {
  label: string;
  elements: Array<string> | [];
  styles?: {};
  optionKey?: string;
  distpatch?: React.Dispatch<OptionActions>;
}

const FormInputSelect = ({
  label,
  styles,
  elements,
  optionKey,
  distpatch,
}: Props) => {
  const [selectValue, setSelectValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    if (optionKey && value && distpatch) {
      distpatch({
        type: 'add',
        payload: { key: optionKey, value },
      });
    } else {
      setSelectValue(value);
    }
  };
  return (
    <FormControl sx={{ width: '100%', maxWidth: '300px' }}>
      <InputLabel sx={{ textAlign: 'center' }}>{label}</InputLabel>
      <Select
        sx={{ minWidth: '70px', ...styles }}
        value={selectValue}
        label={label}
        onChange={handleChange}
        aria-expanded={false}
      >
        {elements &&
          elements.map((value) => (
            <MenuItem onClick={() => {}} value={value} key={value}>
              {value}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
export default FormInputSelect;
