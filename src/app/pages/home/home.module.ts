import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from './feed/feed.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';

@NgModule({
  declarations: [FeedComponent, CreatePostComponent, AplicacaoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  exports: [FeedComponent, AplicacaoComponent],
})
export class HomeModule {}
