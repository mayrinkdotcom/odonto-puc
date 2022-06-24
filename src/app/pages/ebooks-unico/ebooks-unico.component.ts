import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/services/file.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-ebooks-unico',
  templateUrl: './ebooks-unico.component.html',
  styleUrls: ['./ebooks-unico.component.scss']
})
export class EbooksUnicoComponent implements OnInit {
  id: any;
  post: any;
  install = false;
  pdfSrc;
  file: any;
  date: string;

  constructor(private fileService: FileService, private postService: PostsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.id = params.postId);
    this.postService.getPostById(this.id).subscribe(res => {
      this.post = res.post;
      this.date = this.formatData(this.post.createdAt);
    });
    this.fileService.getFileByPost(this.id).subscribe(res => {
      this.file = res.file[0];
      if (this.file.type === 'application/pdf') {
        this.pdfSrc = 'http://localhost:8080/files/posts/' + this.id;
      }
    });
  }
  public goTo(): void {
    window.open('http://localhost:8080/files/posts/' + this.id);
  }
  public formatData(date): any {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }

}
