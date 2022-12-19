import React from 'react';
import { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomDatePicker from './General/CustomDatePicker';

interface FiltersProps {
    dropdownOption: string;
    solValue: number;
    date: Dayjs | null;
    setSolValue: React.Dispatch<React.SetStateAction<number>>;
    setDropdownOption: React.Dispatch<React.SetStateAction<string>>;
    setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const Filters: React.FC<FiltersProps> = ({
    dropdownOption,
    solValue,
    date,
    setSolValue,
    setDropdownOption,
    setDate,
}) => {
    const handleChange = (e: SelectChangeEvent) => {
        setDropdownOption(e.target.value);
    };

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSolValue(+value);
    };

    return (
        <Grid item container spacing={2} justifyContent="center">
            <Grid item>
                <Box>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">
                            Filter Option
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="sol"
                            value={dropdownOption}
                            label="Filter Option"
                            onChange={handleChange}
                        >
                            <MenuItem value="earth_date">Earth Date</MenuItem>
                            <MenuItem value="sol">Sol</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item>
                {dropdownOption === 'earth_date' ? (
                    <CustomDatePicker date={date} setDate={setDate} />
                ) : (
                    <TextField
                        type="number"
                        label="Sol value"
                        variant="outlined"
                        onChange={handleTextFieldChange}
                    />
                )}
            </Grid>
        </Grid>
    );
};

export default Filters;
