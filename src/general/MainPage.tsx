import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { getByEarthDate, getBySol } from '../app/marsRover/actions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { getMarsPhotos } from '../app/marsRover/selector';
import MarsRoversDetails from '../components/MarsRoversDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoverOptions from '../components/RoverOptions';
import Filters from '../components/Filters';
import { Dayjs } from 'dayjs';

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [rover, setRover] = useState<string>('');
    const [solValue, setSolValue] = useState<number>(0);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [dropdownOption, setDropdownOption] = useState<string>('sol');
    const [disabled, setDisabled] = useState<boolean>(true);

    const marsPhotos = useAppSelector((state: RootState) =>
        getMarsPhotos(state)
    );

    const handleButtonClick = () => {
        if (dropdownOption === 'sol') {
            dispatch(getBySol(rover, solValue));
        } else {
            dispatch(getByEarthDate(rover, date?.format('YYYY-MM-DD')));
        }
    };

    React.useEffect(() => {
        if (solValue || date?.unix()) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [solValue, date?.unix()]);

    return (
        <Grid container justifyContent="center">
            <Grid
                item
                container
                xs={8}
                justifyContent="center"
                direction="column"
                spacing={3}
            >
                <Grid item>
                    <RoverOptions value={rover} setValue={setRover} />
                </Grid>
                {rover && (
                    <Grid item>
                        <Filters
                            dropdownOption={dropdownOption}
                            setDropdownOption={setDropdownOption}
                            solValue={solValue}
                            date={date}
                            setSolValue={setSolValue}
                            setDate={setDate}
                        />
                    </Grid>
                )}
                <Grid item>
                    <Button
                        disabled={disabled}
                        variant="contained"
                        onClick={handleButtonClick}
                    >
                        Let's Rover
                    </Button>
                </Grid>
                <Grid item container>
                    {marsPhotos.length ? (
                        <MarsRoversDetails marsPhotos={marsPhotos} />
                    ) : (
                        <Typography>No Results!</Typography>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainPage;
