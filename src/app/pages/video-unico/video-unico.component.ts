import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

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
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
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
}
