import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  useContext,
  useEffect,
  useState,
} from 'react';
import { OptionsContext } from '../../context/OptionsContext';

interface Props {
  id?: string;
  label: string;
  elements: Array<string> | [];
  styles?: {};
}

const FormInputSelect = ({ id, label, styles, elements }: Props) => {
  const [selectValue, setSelectValue] = useState<string>(elements[0]);
  const labelProperty = label.toLowerCase();
  const { setOptions } = useContext(OptionsContext);
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setSelectValue(value);
  };
  useEffect(() => {
    setOptions((items) => {
      return { ...items, [labelProperty]: selectValue };
    });
  }, [selectValue]);
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
