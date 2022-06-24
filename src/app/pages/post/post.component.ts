import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  id: any;
  posts: any;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.id = params.categoryId));
    this.getPosts();
  }
  
  getPosts() {
    this.loading = true;
    this.postsService.getPostsOfCategories(this.id).subscribe(res => {
      this.posts = res.posts;
      this.loading = false;
    });
  }



  goTo(categoria: string, postId: any): void {
    if (categoria === 'banner') {
      this.router.navigate(['banners/cartazes'], { queryParams: { postId } });
    }
    if (categoria === 'ebook') {
      this.router.navigate(['ebook/cartilhas/folder'], {
        queryParams: { postId },
      });
    }
    if (categoria === 'manual') {
      this.router.navigate(['manuais/notas-tecnicas/protocolos'], {
        queryParams: { postId },
      });
    }
    if (categoria === 'video') {
      this.router.navigate(['videos/podcasts'], { queryParams: { postId } });
    }
    if (categoria === 'artigo') {
      this.router.navigate(['artigo/texto-de-apoio'], {
        queryParams: { postId },
      });
    }
  }
}
