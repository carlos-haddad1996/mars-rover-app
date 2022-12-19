import {
    MarsRoverDetailsType,
    MarsRoversDetailsState,
    MARS_ROVER_DETAILS_BY_SOL,
    MARS_ROVER_DETAILS_BY_EARTH_DATE,
} from './types';
import produce from 'immer';

const marsDetailsInitialState: MarsRoversDetailsState = {
    marsDetailsPhotos: [],
};

const marsDetailsReducer = produce(
    (
        draft: MarsRoversDetailsState = marsDetailsInitialState,
        action: MarsRoverDetailsType
    ) => {
        switch (action.type) {
            case MARS_ROVER_DETAILS_BY_SOL: {
                draft.marsDetailsPhotos = action.payload;
                break;
            }
            case MARS_ROVER_DETAILS_BY_EARTH_DATE: {
                draft.marsDetailsPhotos = action.payload;
                break;
            }
        }
    },
    marsDetailsInitialState
);

export default marsDetailsReducer;
