import { Action } from "@ngrx/store";
import Post from "src/app/models/post.model";

export enum PostActionTypes {
    ADD_POST = '[POST] Add Post',
    ADD_POST_SUCCESS = '[POST] Add Post Success',
    ADD_POST_FAIL = '[POST] Add Post Failure',


    GET_POST = '[POST] Get Post',
    GET_POST_SUCCESS = '[POST] Get Post Success',
    GET_POST_FAIL = '[POST] Get Post Failure',

    DELETE_POST = '[POST] Delete Post',
    DELETE_POST_SUCCESS = '[POST] Delete Post Success',
    DELETE_POST_FAIL = '[POST] Delete Post Failure',
}

export class GetPostAction implements Action{
    readonly type = PostActionTypes.GET_POST;
    //constructor(public payload: Post[]){}
}

export class GetPostSuccessAction implements Action{
    readonly type = PostActionTypes.GET_POST_SUCCESS;
    constructor(public payload: Post[]){
       
    }
}
export class GetPostFailAction implements Action{
    readonly type = PostActionTypes.GET_POST_FAIL;
    constructor(public payload: Post[]){}
}






export class AddPostAction implements Action{
    readonly type = PostActionTypes.ADD_POST;
    constructor(public payload: Post){}
}

export class AddPostSuccessAction implements Action{
    readonly type = PostActionTypes.ADD_POST_SUCCESS;
    constructor(public payload: Post[]){
       
    }
}
export class AddPostFailAction implements Action{
    readonly type = PostActionTypes.ADD_POST_FAIL;
    constructor(public payload: Post[]){}
}




export class DeletePostAction implements Action{
    readonly type = PostActionTypes.DELETE_POST;
    constructor(public payload: number){}
}

export class DeletePostSuccessAction implements Action{
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;
    constructor(public payload: string | any){
       
    }
}
export class DeletePostFailAction implements Action{
    readonly type = PostActionTypes.DELETE_POST_FAIL;
   constructor(public payload: any){}
}



export type PostAction = 
AddPostAction | 
AddPostSuccessAction | 
AddPostFailAction | 
GetPostAction | 
GetPostSuccessAction | 
GetPostFailAction | 
DeletePostAction | 
DeletePostSuccessAction | 
DeletePostFailAction;