import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { FeedComponent } from './feed/feed.component';


const appRoutes: Routes = [
    {
      path: '',
      component: FeedComponent,
    },
    {
      path: 'create-post',
      component: CreatePostComponent,
    }
  ]


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
