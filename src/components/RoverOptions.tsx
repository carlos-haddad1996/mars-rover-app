import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface RoverOptionsProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RoverOptions: React.FC<RoverOptionsProps> = ({ value, setValue }) => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="controlled-radio-buttons">Rover Selection</FormLabel>
            <RadioGroup
                row
                name="controlled-radio"
                value={value}
                onChange={handleRadioChange}
            >
                <FormControlLabel
                    value="curiosity"
                    control={<Radio />}
                    label="Curiosity"
                />
                <FormControlLabel
                    value="opportunity"
                    control={<Radio />}
                    label="Opportunity"
                />
                <FormControlLabel
                    value="spirit"
                    control={<Radio />}
                    label="Spirit"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default RoverOptions;
