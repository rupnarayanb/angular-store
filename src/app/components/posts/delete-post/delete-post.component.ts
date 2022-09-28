import { Component, OnInit, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import AppState from 'src/app/models/app.state.model';
import { DeletePostAction } from 'src/app/actions/posts/actions';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']  
})
export class DeletePostComponent implements OnInit {

  @Input()
  index: number;

  constructor(private store: Store<any>) { 
    this.index = 1
  }

  ngOnInit(): void {
  }

  deletePost(){
    this.store.dispatch(new DeletePostAction(this.index));
  }

}
