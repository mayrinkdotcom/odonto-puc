import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: Post[];

  constructor() { }

  ngOnInit(): void {
  }

}
