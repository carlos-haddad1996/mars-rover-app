import React from 'react';
import Grid from '@mui/material/Grid';
import { MarsRoverDetails } from '../app/marsRover/types';
import MarsRoverDetail from './MarsRoverDetail';

interface MarsRoversDetailsProps {
    marsPhotos: MarsRoverDetails[];
}

const MarsRoversDetails: React.FC<MarsRoversDetailsProps> = ({
    marsPhotos,
}) => {
    return (
        <Grid item container spacing={3} direction="column">
            {marsPhotos.map((marsPhoto) => {
                return (
                    <Grid item key={marsPhoto.id} md={4} xs={2}>
                        <MarsRoverDetail marsPhoto={marsPhoto} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default MarsRoversDetails;
