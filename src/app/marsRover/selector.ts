import { RootState } from '../store';
import { MarsRoverDetails } from './types';

export function getMarsPhotos(state: RootState): MarsRoverDetails[] {
    const marsPhotos = state.marsDetails.marsDetailsPhotos;
    const shuffledPhotos = [...marsPhotos].sort(() => 0.5 - Math.random());

    return shuffledPhotos.slice(0, 6);
}
