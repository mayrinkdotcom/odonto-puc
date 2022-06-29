import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: Post[];

  constructor(private router: Router,) { }

  ngOnInit(): void {
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
