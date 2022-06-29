import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-review-posts',
  templateUrl: './review-posts.component.html',
  styleUrls: ['./review-posts.component.scss']
})
export class ReviewPostsComponent implements OnInit, OnDestroy {

  postsToReview: Post[];
  loading: boolean = false;

  subscription: Subscription[] = [];

  constructor(
    private postsService: PostsService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getPostsToReview();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
  
  getPostsToReview() {
    try {
      this.loading = true;
      const sub = this.postsService.getSolicitacoes().subscribe(data => {
        this.postsToReview = data.posts;
        this.loading = false;
      });
      this.subscription.push(sub);
    } catch (error) {
      console.error("ERROR on GetPostsToReview", error);
      throw error;
    }
  }

  sendDecision(post: Post, decision: boolean) {
    try {
      this.loading = true;
      this.postsService.sendDecision(post.id, decision).subscribe(data => {
        this.loading = false;
        this.getPostsToReview();
      });
    } catch (error) {
    }
  }
  goTo(categoria: string, postId: any): void {
    if (categoria === 'banner') {
      this.router.navigate(["banners/cartazes?postId="+postId]);
    }
    if (categoria === 'ebook') {
      this.router.navigate(["ebook/cartilhas/folder?postId="+postId]);
    }
    if (categoria === 'manual') {
      this.router.navigate(["manuais/notas-tecnicas/protocolos?postId="+postId]);
    }
    if (categoria === 'video') {
      this.router.navigate(["videos/podcasts?postId="+postId]);
    }
    if (categoria === 'artigo') {
      this.router.navigate(["artigo/texto-de-apoio?postId="+postId]);
    }
  }

}
