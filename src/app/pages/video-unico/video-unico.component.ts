import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-video-unico',
  templateUrl: './video-unico.component.html',
  styleUrls: ['./video-unico.component.scss']
})
export class VideoUnicoComponent implements OnInit {
  id: any;
  post: any;
  install = false;
  pdfSrc;
  file: any;
  date: string;
  user: User;
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
    this.route.queryParams
      .subscribe(params => this.id = params.postId);
    this.postService.getPostById(this.id).subscribe(res => {
    this.post = res.post;
    const newUrl = this.post.link.replace('watch?v=', 'embed/');
    this.post.link = this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
    this.date = this.formatData(this.post.createdAt);
    });
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
