import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { provideMockStore } from '@ngrx/store/testing';
import Post from "src/app/models/post.model";
import * as postActions from "src/app/actions/posts/actions";
import * as PoReducer from "src/app/reducers/post/reducers";
import {PostReducer} from "src/app/reducers/post/reducers";
import { PostActionTypes, PostAction } from "src/app/actions/posts/actions";
import { state } from '@angular/animations';
import { Action } from 'rxjs/internal/scheduler/Action';

describe('default case', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({})]
    }).compileComponents();
  });

  it('Should return initial state', () => {
    //const noopAction = new Post;
    //const app = fixture.componentInstance;
    //expect(app).toBeTruthy();

    const  { initialState }:any  = {};
    const action:any = {} ;
    const state2 = PostReducer(undefined,action);

   // console.log(initialState + "aaa");

    expect(state2).toEqual({
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
        });

  });

  describe('Post states', () => {

   

    const  initialState  = {
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


        const payload:Post[] = initialState.posts ;

        const payloadForAdd:Post = {
            id: 3,
            userId: 4,
            title: "vvv Post",
            body: " kkk when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        };

        const  PayloadForDelete  = {
            posts: 
                [
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

    it('Loading true for get post', () => {

        //const {initialState} = 
       
        const action = new postActions.GetPostAction();
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(true);
    
      });

      it('get post success', () => {

        //const {initialState} = 
        const action = new postActions.GetPostSuccessAction(payload);
        //const result = PostReducer(initialState, postActions.GetPostSuccessAction)
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.posts).toBe(payload);
    
      });

      it('get post failure', () => {

        //const {initialState} = 
        const action = new postActions.GetPostFailAction(payload);
        //const result = PostReducer(initialState, postActions.GetPostSuccessAction)
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.posts.length).toEqual(2);
    
      });


      it('Loading true for add post', () => {
        const action = new postActions.AddPostAction(payloadForAdd);
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(true);
    
      });

      it('add post success', () => {

        //const {initialState} = 
        const action = new postActions.AddPostSuccessAction(payload);
        //const result = PostReducer(initialState, postActions.GetPostSuccessAction)
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(false);
        expect([...state.posts].length).toEqual([...payload, payloadForAdd].length);
    
      });


      it('add post fail', () => {

        //const {initialState} = 
        const action = new postActions.AddPostFailAction(payload);
        //const result = PostReducer(initialState, postActions.GetPostSuccessAction)
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.posts).toBe(payload);
    
      });

      it('Loading true for delete post', () => {
        const action = new postActions.DeletePostAction(0);
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(true);
    
      });

      it('delete post success', () => {
        const action = new postActions.DeletePostSuccessAction("Post Deleted");
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(false);

        expect(state.posts.length).toEqual(PayloadForDelete.posts.length);
    
      });

      it('delete post fail', () => {
        const action = new postActions.DeletePostFailAction(payload);
        const state = PostReducer(initialState, action);

        expect(state.loading).toBe(false);

        expect(state.posts.length).toEqual(payload.length);
    
      });
  })
  
  
});
