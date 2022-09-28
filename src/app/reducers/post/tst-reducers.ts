import { PostState , PostReducer} from './reducers';
import { ActionReducerMap } from '@ngrx/store';




export const rootReducer = {};

export interface AppState {
    post: PostState;
};


// export const reducers: ActionReducerMap<AppState, any> = {
//     post: PostReducer
// };