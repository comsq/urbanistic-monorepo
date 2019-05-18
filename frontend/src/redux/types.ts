import { StateType } from 'typesafe-actions';

import rootReducer from './reducer';

export type RootState = StateType<typeof rootReducer>;
