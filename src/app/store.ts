import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import marsDetailsReducer from './marsRover/reducer';

const appReducer = combineReducers({
    counter: counterReducer,
    marsDetails: marsDetailsReducer,
});

export const store = configureStore({
    reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
