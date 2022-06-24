import { ForumListagemComponent } from './forum-listagem/forum-listagem.component';
import { ForumExibicaoComponent } from './forum-exibicao/forum-exibicao.component';
import { ForumUnicoComponent } from './forum-unico/forum-unico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum-create/forum.component'

const appRoutes: Routes = [
    {
      path: 'novo',
      component: ForumComponent,
    },
    {
      path: '',
      component: ForumListagemComponent,
    },
    {
      path:'listagem',
      component: ForumExibicaoComponent,
    },
    {
      path:'unico',
      component: ForumUnicoComponent,
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
export class ForumRoutingModule { }
