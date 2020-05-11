import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './post.component';
import {ListPostComponent} from './components/list-post/list-post.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {PostAddComponent} from './components/post-add/post-add.component';
import {PostUpdateComponent} from './components/post-update/post-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


@NgModule({
  declarations: [PostComponent, ListPostComponent, PostFormComponent, PostAddComponent, PostUpdateComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostModule {
}
