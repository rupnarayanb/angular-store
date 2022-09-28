import { Actions } from "@ngrx/effects";
import { PostActionTypes, PostAction } from "src/app/actions/posts/actions";
//import Post from "src/app/models/post.model";
import { ActionReducerMap, ActionReducer, MetaReducer, INIT } from '@ngrx/store';
import {Action} from '@ngrx/store';
import Post from "src/app/models/post.model";


export interface PostState {
    posts: Post[],
    loading : boolean,
    error: string | any
}

const initialState: PostState = {
    posts: 
        [
            {
                id: 1,
                userId: 1,
                title: "First Post",
                body: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
            },
            {
                id: 2,
                userId: 1,
                title: "Second Post",
                body: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
            }
        ],
        loading: false,
        error: "asdasd"
    }

export function PostReducer<Object> (state:PostState = initialState, action: PostAction){
    //const tutorialAction = action as PostAction.Actions; 
    switch(action.type){
        case PostActionTypes.GET_POST:
            return{
                ...state,
                loading: true
            }
        case PostActionTypes.GET_POST_SUCCESS:
            console.log('payload: ' + JSON.stringify(action.payload))
            return{
                ...state,
                posts:action.payload,
                loading: false
            }

        case PostActionTypes.GET_POST_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false
            }



            case PostActionTypes.ADD_POST:
                return{
                    ...state,
                    loading: true
                }
            case PostActionTypes.ADD_POST_SUCCESS:
                return{
                    ...state,
                    posts:[action.payload, ...state.posts],
                    loading: false
                }
    
            case PostActionTypes.ADD_POST_FAIL:
                return{
                    ...state,
                    error:action.payload,
                    loading: false
                }



                case PostActionTypes.DELETE_POST:
                return{
                    ...state,
                    loading: true
                }
                case PostActionTypes.DELETE_POST_SUCCESS:{
                    let updatedPosts = [...state.posts];
                    updatedPosts.splice(action.payload, 1);   
                    return{
                        ...state,
                        posts:updatedPosts,
                        loading: false
                    }
                }
                
                
    
            case PostActionTypes.DELETE_POST_FAIL:
                return{
                    ...state,
                    error:action.payload,
                    loading: false
                }

                default:
                    return {...state};


    }
    
}


// export const gintaaReducer: ActionReducerMap<PostState> = {
//     posts: PostReducer
// };


