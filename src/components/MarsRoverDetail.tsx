import React from 'react';
import styled from 'styled-components';
import { MarsRoverDetails } from '../app/marsRover/types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface MarsRoverDetailProps {
    marsPhoto: MarsRoverDetails;
}

const MarsRoverDetail: React.FC<MarsRoverDetailProps> = ({ marsPhoto }) => {
    return (
        <Grid
            item
            container
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item>
                <StyledImg src={marsPhoto.img_src} alt={marsPhoto.id} />
            </Grid>
            <Grid item>
                <Typography>Sol: {marsPhoto.sol}</Typography>
                <Typography>Earth Date: {marsPhoto.earth_date}</Typography>
                <Typography>{`Camera: ${marsPhoto.camera.full_name} (${marsPhoto.camera.name})`}</Typography>
                <Typography>
                    Landing Date: {marsPhoto.rover.landing_date}
                </Typography>
                <Typography>Landing Name: {marsPhoto.rover.name}</Typography>
            </Grid>
        </Grid>
    );
};

const StyledImg = styled.img`
    height: 150px;
    width: 150px;
`;

export default MarsRoverDetail;
