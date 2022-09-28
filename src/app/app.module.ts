import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { PostReducer, PostState } from './reducers/post/reducers';
import { PostEffects } from './effects/posts.effects';
import { PostsComponent } from './components/posts/posts/posts.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { PostActionTypes } from './actions/posts/actions';

//import { reducers } from './reducers/post/tst-reducers';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //StoreModule.forRoot(reducers),
    StoreModule.forRoot({
      post : PostReducer
    },{}),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
