import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ManageForumComponent } from './manage-forum/manage-forum.component';
import { ForumModule } from '../forum/forum.module';
import { ReviewPostsComponent } from './review-posts/review-posts.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ManageUserPoolComponent } from './manage-user-pool/manage-user-pool.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ManagerComponent, ManageForumComponent, ReviewPostsComponent, ManageUserPoolComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ComponentsModule,
    ForumModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ]
})
export class ManagerModule { }
