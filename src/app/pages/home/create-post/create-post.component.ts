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
export class CreatePostComponent implements OnDestroy {
  selectedFiles: FileList;
  currentFileUpload: File;
  categorias: any;
  tipo: string;
  loading = false;
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
    private fileService: FileService
  ) {}

  setCategorie(): void{
    this.postsService.getCategories(this.createPostForm.value.tipo).subscribe((result) => {
      this.categorias = result.categories;
    });
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSubmit(): void {
    this.loading = true;
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
      .subscribe((res) => {
        this.upload(res.posts.id);
        this.router.navigate(['feed']);
        this.loading = false;
      });
  }

  upload(lastid): void {
    console.log(this.selectFile);

    console.log(this.selectedFiles);
    if (this.selectedFiles == null) {
      console.log('upload sem arquivo');
    } else {
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles[0];
      this.fileService.upload(this.currentFileUpload, lastid).subscribe(
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
