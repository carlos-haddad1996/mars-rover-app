import React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface CustomDatePickerProps {
    date: Dayjs | null;
    setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    date,
    setDate,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                disableFuture
                openTo="year"
                views={['year', 'month', 'day']}
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default CustomDatePicker;
