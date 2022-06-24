import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-categoria-post',
  templateUrl: './categoria-post.component.html',
  styleUrls: ['./categoria-post.component.scss']
})
export class CategoriaPostComponent implements OnInit {
  type: any;
  categories: any;
  constructor(private router: Router, private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.type = params.category);
    this.postService.getCategories(this.type).subscribe(res => this.categories = res.categories);
    console.log(this.categories);
  }
  goTo(path: string, categoryId: number): void{
    this.router.navigate([path], { queryParams: { categoryId } });
  }

}
