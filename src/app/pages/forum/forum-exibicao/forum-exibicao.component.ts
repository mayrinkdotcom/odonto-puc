import { ForumService } from './../../../services/forum.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-exibicao',
  templateUrl: './forum-exibicao.component.html',
  styleUrls: ['./forum-exibicao.component.scss']
})
export class ForumExibicaoComponent implements OnInit {

  constructor(
    private forumService:ForumService,
    private router: Router,
    ) { }

  foruns: any[] = [];

  loading: boolean = false;
  
  ngOnInit(): void {
    this.loading = true;
    this.forumService.getAllForuns().subscribe(
      result => {
        this.loading = false;
        this.foruns = result.forum;
      }
    );
  }

  goTo(path: string, forumId: number): void {
    this.router.navigate([path], { queryParams: { forumId } });
  }

}
