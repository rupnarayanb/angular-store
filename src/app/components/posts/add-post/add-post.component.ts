import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import AppState from 'src/app/models/app.state.model';
import Post from 'src/app/models/post.model';
import { AddPostAction, PostAction } from 'src/app/actions/posts/actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    id: 1,
    userId: 2,
    title: '',
    body: ''
  }

  constructor(private store: Store<any>) { }

  ngOnInit(): void { 
  }

  createPost(){
    this.post.id = Math.floor(Math.random() * 10);
    this.post.userId =  Math.floor(Math.random() * 100);
    this.store.dispatch(new AddPostAction({...this.post}));
    this.post.title = '';
    this.post.body = '';
  }

}
