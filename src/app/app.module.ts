
// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { ArtigoUnicoComponent } from './pages/artigo-unico/artigo-unico.component';
import { BannerUnicoComponent } from './pages/banner-unico/banner-unico.component';
import { EbooksUnicoComponent } from './pages/ebooks-unico/ebooks-unico.component';
import { ManualUnicoComponent } from './pages//manual-unico/manual-unico.component';
import { VideoUnicoComponent } from './pages/video-unico/video-unico.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ArtigoUnicoComponent,
    BannerUnicoComponent,
    EbooksUnicoComponent,
    ManualUnicoComponent,
    VideoUnicoComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PdfViewerModule
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
