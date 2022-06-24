import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../../../services/posts.service';
import { FileService } from '../../../services/file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit, OnDestroy {
  selectedFiles: FileList;
  currentFileUpload: File;
  categorias: any;
  tipo: string;
  progress: { percentage: number } = { percentage: 0 };
  post: any[] = [];
  createPostForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl(''),
    link: new FormControl(''),
    descricao: new FormControl(''),
    categoria: new FormControl(''),
    tipo: new FormControl('', [Validators.required]),
  });

  subscriptions: Subscription[] = [];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private FileService: FileService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    
  }
  setCategorie(){
    this.postsService.getCategories(this.createPostForm.value.tipo).subscribe((result) => {
      this.categorias = result.categories;
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSubmit(): void {
    const title = this.createPostForm.get('title').value;
    console.log('🚀 -> CreatePostComponent -> onSubmit -> title', title);
    const content = this.createPostForm.get('content').value;
    console.log('🚀 -> CreatePostComponent -> onSubmit -> content', content);
    this.postsService
      .create(
        this.createPostForm.get('title').value,
        this.createPostForm.get('content').value,
        this.createPostForm.get('descricao').value,
        this.createPostForm.get('tipo').value,
        this.createPostForm.get('link').value,
        this.createPostForm.get('categoria').value
      )
      .subscribe((res) => this.upload(res.posts.id));
  }

  upload(lastid) {
    console.log(this.selectFile);

    console.log(this.selectedFiles);
    if (this.selectedFiles == null) {
      console.log('upload sem arquivo');
    } else {
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles[0];
      this.FileService.upload(this.currentFileUpload, lastid).subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            console.log('Arquivo enviado com sucesso');
          }
        }
      );
      this.selectedFiles = undefined;
    }
  }
}
