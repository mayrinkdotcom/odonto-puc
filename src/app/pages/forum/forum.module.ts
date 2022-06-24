import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from '../../components/components.module';
import { ForumComponent } from './forum-create/forum.component';
import { ForumRoutingModule } from './forum-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ForumListagemComponent } from './forum-listagem/forum-listagem.component';
import { ForunsCadastradosComponent } from './foruns-cadastrados/foruns-cadastrados.component';
import { ForumModalComponent } from './forum-modal/forum-modal.component';
import { ForumExibicaoComponent } from './forum-exibicao/forum-exibicao.component';
import { ForumUnicoComponent } from './forum-unico/forum-unico.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ForumComponent,
    ForumListagemComponent,
    ForunsCadastradosComponent,
    ForumModalComponent,
    ForumExibicaoComponent,
    ForumUnicoComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    ComponentsModule,
    ForumRoutingModule,
  ],
  exports: [ForumComponent, ForunsCadastradosComponent],
})
export class ForumModule {}
