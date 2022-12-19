import axios from 'axios';
import { Dispatch } from 'react';
import { RootState } from '../store';
import {
    MarsRover,
    MARS_ROVER_DETAILS_BY_EARTH_DATE,
    MARS_ROVER_DETAILS_BY_SOL,
} from './types';

const MARS_API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers`;

export function getBySol(
    roversName: string,
    solValue: number
): (
    dispatch: Dispatch<{ type: string; payload?: unknown }>,
    getState: () => RootState
) => Promise<void> {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get<MarsRover>(
                `${MARS_API_URL}/${roversName}/photos?sol=${solValue}&api_key=DEMO_KEY`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );

            return dispatch({
                type: MARS_ROVER_DETAILS_BY_SOL,
                payload: data.photos,
            });
        } catch (error) {
            console.error(`${error}`);
        }
    };
}

export function getByEarthDate(
    roversName: string,
    date: string | undefined
): (
    dispatch: Dispatch<{ type: string; payload?: unknown }>,
    getState: () => RootState
) => Promise<void> {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get<MarsRover>(
                `${MARS_API_URL}/${roversName}/photos?earth_date=${date}&api_key=DEMO_KEY`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );

            return dispatch({
                type: MARS_ROVER_DETAILS_BY_EARTH_DATE,
                payload: data.photos,
            });
        } catch (error) {
            console.error(`${error}`);
        }
    };
}
