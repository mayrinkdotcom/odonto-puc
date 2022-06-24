import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../../types/Post'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  searchString: FormControl = new FormControl();
  searchResults: Post[] = [];
  noResults: boolean = false;

  subscriptions: Subscription[] = [];

  constructor(
    private postsService: PostsService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onSubmit(): void  {
    this.loading = true;
    const sub = this.postsService.search(this.searchString.value).subscribe((data: {posts: Post[]}) => {
      this.loading = false;
      this.searchResults = data.posts;
      this.noResults = (this.searchResults.length === 0);
    }, error => {
      this.loading = false;
      this._snackBar.open('Erro ao tentar buscar conteúdo', 'X', {duration: 2000});
      console.error('ERROR on SearchComponent', error);
    });

    this.subscriptions.push(sub);
  }

}
