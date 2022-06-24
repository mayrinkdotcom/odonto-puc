// Components
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriasCadastradasComponent } from './categorias-cadastradas/categorias-cadastradas.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriaModalComponent } from './categoria-modal/categoria-modal.component';

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileListComponent } from './file-list/file-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CategoriaPostComponent } from './categoria-post/categoria-post.component';



@NgModule({
  declarations: [
    CadastroComponent,
    CarouselComponent,
    CategoriaComponent,
    HeaderComponent,
    CategoriasCadastradasComponent,
    CategoriaModalComponent,
    LoginComponent,
    FileUploadComponent,
    FileListComponent,
    NavbarComponent,
    CategoriaPostComponent,
  ],
  imports: [
    MatDialogModule,
    MatExpansionModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    CategoriasCadastradasComponent,
    CarouselComponent,
    HeaderComponent,
    NavbarComponent,
    MatExpansionModule,
    LoginComponent,
    FileUploadComponent,
    FileListComponent,
  ],
})
export class ComponentsModule {}
