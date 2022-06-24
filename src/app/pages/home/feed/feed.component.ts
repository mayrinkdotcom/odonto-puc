import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  user: User;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getPost(id):void{    
    localStorage.setItem('id', id);
    this.router.navigate(['/post']);
  }

  goTo(path:string) {
    this.router.navigate([path]);
  }

}
