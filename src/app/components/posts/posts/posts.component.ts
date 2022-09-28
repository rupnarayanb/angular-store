import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import Post from 'src/app/models/post.model';
import AppState from 'src/app/models/app.state.model';
import { GetPostAction } from 'src/app/actions/posts/actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$!: Observable<Post[]>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>

  constructor(private store: Store<any>) { 
    
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(store => store.post.posts);
    this.error$ = this.store.select(store => store.post.error);
    this.store.dispatch(new GetPostAction());
  }

}
