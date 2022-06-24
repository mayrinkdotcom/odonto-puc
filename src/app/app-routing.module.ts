import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AplicacaoComponent } from './pages/home/aplicacao/aplicacao.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { CreatePostComponent } from './pages/home/create-post/create-post.component';
import { PostComponent } from './pages/post/post.component'
import { ArtigoUnicoComponent } from './pages/artigo-unico/artigo-unico.component';
import { AuthGuard } from "./services/guards/auth.guard";
import { NotAlunoGuard } from "./services/guards/not-aluno.guard";
import {CategoriaPostComponent} from './components/categoria-post/categoria-post.component'
import { BannerUnicoComponent } from './pages/banner-unico/banner-unico.component';
import { ManualUnicoComponent } from './pages/manual-unico/manual-unico.component';
import { EbooksUnicoComponent } from './pages/ebooks-unico/ebooks-unico.component';
import { VideoUnicoComponent } from './pages/video-unico/video-unico.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AplicacaoComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'file',
    component: FileUploadComponent,
  },
  {
    path: 'filelist',
    component: FileListComponent,
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'categoria',
    component: CategoriaComponent,
  },
  {
    path: 'forum',
    loadChildren: () =>
      import('./pages/forum/forum.module').then((m) => m.ForumModule),
  },
  {
    path: 'manager',
    loadChildren: () => import('./pages/manager/manager.module').then((m) => m.ManagerModule),
    canActivate: [NotAlunoGuard],
  },
  {
    path: 'artigo/texto-de-apoio',
    component: ArtigoUnicoComponent,
  },
  {
    path: 'banners/cartazes',
    component: BannerUnicoComponent,
  },
  {
    path: 'manuais/notas-tecnicas/protocolos',
    component: ManualUnicoComponent,
  },
  {
    path: 'ebook/cartilhas/folder',
    component: EbooksUnicoComponent,
  },
  {
    path: 'videos/podcasts',
    component: VideoUnicoComponent,
  },
  {
    path: 'post/categoria',
    component: CategoriaPostComponent
  },
  {
    path: 'posts',
    component: PostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
