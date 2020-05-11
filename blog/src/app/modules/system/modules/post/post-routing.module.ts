import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post.component';
import {ListPostComponent} from './components/list-post/list-post.component';
import {PostAddComponent} from './components/post-add/post-add.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {PostUpdateComponent} from './components/post-update/post-update.component';


const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {
        path: '',
        component: ListPostComponent
      },
      {
        path: 'add',
        component: PostAddComponent
      },
      {
        path: 'edit/:id',
        component: PostUpdateComponent
      },
      {
        path: 'detail/:id',
        component: PostDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
