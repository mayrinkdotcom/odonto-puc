import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from 'src/app/components/categoria/categoria.component';
import { ManageForumComponent } from './manage-forum/manage-forum.component';
import { ManageUserPoolComponent } from './manage-user-pool/manage-user-pool.component';
import { ManagerComponent } from './manager.component';
import { ReviewPostsComponent } from './review-posts/review-posts.component';


const appRoutes: Routes = [
    {
      path: '',
      component: ManagerComponent,
      children: [
        {
          path: 'forum',
          component: ManageForumComponent,
        },
        {
          path: 'posts',
          component: ReviewPostsComponent,
        },
        {
          path: 'categoria',
          component: CategoriaComponent,
        },
        {
          path: 'users',
          component: ManageUserPoolComponent,
        }
      ]
    },
  ]


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerRoutingModule { }
