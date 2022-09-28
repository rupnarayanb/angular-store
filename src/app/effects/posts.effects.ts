import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { PostServices } from '../services/posts/services';

import { PostActionTypes , GetPostAction, GetPostSuccessAction, 
    GetPostFailAction,DeletePostAction,DeletePostSuccessAction,DeletePostFailAction, 
    AddPostAction, AddPostSuccessAction, AddPostFailAction} from '../actions/posts/actions';


@Injectable()

export class PostEffects {

    constructor(
      private  actions$ : Actions,
      private  services : PostServices
    ){}


    @Effect() getPosts$ =  this.actions$.pipe(
        ofType<GetPostAction>(PostActionTypes.GET_POST),
        mergeMap(() => this.services.getPosts().pipe(
            map(data =>{
                return new GetPostSuccessAction(data);
            }),
            catchError(error => of(new GetPostFailAction(error)))
        )
        
        
        )
    )


    @Effect() deletePosts$ =  this.actions$.pipe(
        ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
        mergeMap((data) => this.services.deletePost(data.payload).pipe(
            map(data2 =>{
                return new DeletePostSuccessAction(data2);
            }),
            catchError(error => of(new DeletePostFailAction(error)))
        )
        
        
        )
    )

    @Effect() addPosts$ =  this.actions$.pipe(
        ofType<AddPostAction>(PostActionTypes.ADD_POST),
        mergeMap((data) => this.services.addPost(data.payload).pipe(
            map(data2 =>{
                return new AddPostSuccessAction(data2);
            }),
            catchError(error => of(new AddPostFailAction(error)))
        )
        
        
        )
    )




}

