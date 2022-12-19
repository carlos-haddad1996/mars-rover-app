export const MARS_ROVER_DETAILS_BY_SOL = 'MARS_ROVER_DETAILS_BY_SOL';
export const MARS_ROVER_DETAILS_BY_EARTH_DATE =
    'MARS_ROVER_DETAILS_BY_EARTH_DATE';

export interface MarsRoversDetailsState {
    marsDetailsPhotos: MarsRoverDetails[];
}

export interface MarsRover {
    photos: MarsRoverDetails[];
}

export interface MarsRoverDetails {
    id: string;
    sol: number;
    camera: MarsRoverCameraDetails;
    img_src: string;
    earth_date: string;
    rover: RoverDetails;
}

export interface MarsRoverCameraDetails {
    id: string;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface RoverDetails {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export interface SetMarsRoverDetailsBySol {
    type: typeof MARS_ROVER_DETAILS_BY_SOL;
    payload: MarsRoverDetails[];
}

export interface SetMarsRoverDetailsByEarthDate {
    type: typeof MARS_ROVER_DETAILS_BY_EARTH_DATE;
    payload: MarsRoverDetails[];
}

export type MarsRoverDetailsType =
    | SetMarsRoverDetailsBySol
    | SetMarsRoverDetailsByEarthDate;
