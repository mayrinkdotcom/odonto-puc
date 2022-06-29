import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FileService } from 'src/app/services/file.service';
import { PostsService } from 'src/app/services/posts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manual-unico',
  templateUrl: './manual-unico.component.html',
  styleUrls: ['./manual-unico.component.scss']
})
export class ManualUnicoComponent implements OnInit {
  id: any;
  post: any;
  install = false;
  pdfSrc;
  file: any;
  date: string;
  user: any;
  constructor(private fileService: FileService, private postService: PostsService, private route: ActivatedRoute,
              private router: Router, private authService:AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
    this.route.queryParams
      .subscribe(params => this.id = params.postId);
    this.postService.getPostById(this.id).subscribe(res => {
      this.post = res.post;
      this.date = this.formatData(this.post.createdAt);
    });
    this.fileService.getFileByPost(this.id).subscribe(res => {
      this.file = res.file[0];
      if (this.file.type === 'application/pdf') {
        this.pdfSrc = `${environment.BASE_URL}/files/posts/${this.id}`;
      }
    });
  }
  public goTo(): void {
    window.open(`${environment.BASE_URL}/files/posts/${this.id}`);
  }
  public formatData(date): any {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }
  Excluir(): any{
    this.postService.delete(this.post.id).subscribe(res => this.router.navigate(['feed']));
  }
  backTo(categoryId:string): void{
    this.router.navigate(['posts'], { queryParams: { categoryId } });
  }
}
